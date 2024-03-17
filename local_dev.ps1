Get-ChildItem -Path ./src/wiki_build -File -Recurse | ForEach-Object { $_.Delete() }
$env:__source_path = "wiki_build"
node .
npx next dev