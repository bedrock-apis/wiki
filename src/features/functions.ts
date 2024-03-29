import * as fs from "node:fs";

export function* GetFilesTree(base: string): Generator<string, void> {
    for (const info of fs.readdirSync(base, { withFileTypes: true })) {
        if (info.isDirectory()) yield* GetFilesTree(base + "/" + info.name);
        else yield base + "/" + info.name;
    }
}
export function RemoveSuffix(fileName: string) {
    const spl = fileName.split(".");
    return fileName.substring(0, fileName.length - spl[spl.length - 1].length - 1);
}

export type UserLike = {
    html_url: string
    name: string
    avatar_url: string
    [k: string]: any
};

export type ProfileInfo =  UserLike | null

const fetchedUsers: { [k: string]: UserLike } = {};
export async function getProfileInfo(profileName: string): Promise<ProfileInfo> {
    if(process.env.DEV_MODE) return null;
    if(profileName.length <= 3) return null;
    if (profileName in fetchedUsers) return fetchedUsers[profileName];
    try {
        const source = await fetch("https://api.github.com/users/" + profileName);
        if (source.status == 404) return null;
        const data = await source.json();
        return fetchedUsers[profileName] = data;
    } catch (error) {
        return null;
    }
}