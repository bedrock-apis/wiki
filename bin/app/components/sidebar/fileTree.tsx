import { readdirSync } from "fs";
import DropdownMenu from "../dropdownMenu/dropdownMenu";
import { join } from "path";
import ButtonLink from "../buttonLink/buttonLink";

function getFiles(dir: string): { name: string, path: string, isDirectory: boolean, children: any }[] {
    const files = readdirSync(dir, { withFileTypes: true });

    return files.map((file) => {
        const filePath = join(dir, file.name);
        return {
            name: file.name,
            path: filePath,
            isDirectory: file.isDirectory(),
            children: file.isDirectory() ? getFiles(filePath) : null,
        };
    });
};

export function FileTree({ rootPath }: { rootPath: string }) {
    const files = getFiles(rootPath);

    const renderFileTree = (files: ReturnType<typeof getFiles>) => {
        return files.map((file, index) => (
            <div key={index}>
                {file.isDirectory ? (
                    <>
                        <DropdownMenu name={file.name}>
                            {
                                renderFileTree(file.children)
                            }
                        </DropdownMenu>
                    </>
                ) : (
                    <ButtonLink link={"/docs/" + file.path.split("mdxPages")[1].split(".mdx")[0]} name={file.name} />
                )}
            </div>
        ));
    };

    return <div>{renderFileTree(files)}</div>;
};
