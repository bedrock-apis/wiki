Get-ChildItem -Path ./src/wiki_build -File -Recurse | ForEach-Object { $_.Delete() }
Get-ChildItem -Path ./public/images -File -Recurse | ForEach-Object { $_.Delete() }
$env:__source_path = "wiki_build"
$env:DEV_MODE = $true;
node .
npx next build