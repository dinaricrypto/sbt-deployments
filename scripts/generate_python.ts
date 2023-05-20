import * as fs from "fs";
import * as path from "path";
import * as _ from "lodash";

const OUTPUT_DIR = "dist-python";
const ASSET_PATH = "src/assets";
const PYTHON_VERSION = process.argv.slice(2)[0];

async function generate_python() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }

  // Generate source
  const destSourcePath = path.join(OUTPUT_DIR, "src");
  if (!fs.existsSync(destSourcePath)) {
    fs.mkdirSync(destSourcePath);
  }
  // Generate module
  const destModulePath = path.join(destSourcePath, "dinari_sbt_deployments");
  if (!fs.existsSync(destModulePath)) {
    fs.mkdirSync(destModulePath);
  }
  fs.closeSync(fs.openSync(path.join(destModulePath, "__init__.py"), "w"));

  // Copy over json files
  const versions = fs.readdirSync(ASSET_PATH);
  for (const version of versions) {
    const assetVersionPath = path.join(ASSET_PATH, version);

    // Create directory for module
    const destAssetVersionPath = path.join(
      destModulePath,
      _.snakeCase(version)
    );
    if (!fs.existsSync(destAssetVersionPath)) {
      fs.mkdirSync(destAssetVersionPath);
    }
    fs.writeFileSync(
      path.join(destAssetVersionPath, "__init__.py"),
      `import json
from importlib.resources import files


def get_deployment(file_name: str):
    source = files(__package__).joinpath(file_name)
    return json.loads(source.read_text())
`
    );

    const files = fs.readdirSync(assetVersionPath);
    for (const file of files) {
      if (path.extname(file) === ".json") {
        const assetVersionFilePath = path.join(assetVersionPath, file);
        fs.copyFileSync(
          assetVersionFilePath,
          path.join(destAssetVersionPath, file)
        );
      }
    }
  }

  // Generate pyproject.toml
  const pyProjectToml = `[build-system]
requires = ["setuptools", "setuptools-scm"]
build-backend = "setuptools.build_meta"

[project]
name = "dinari-sbt-deployments"
version = "${PYTHON_VERSION}"
authors = [{ name = "Jake Timothy", email = "jake@dinari.com" }]
description = "Collection of SBT singleton deployments"
requires-python = ">=3.7"

[tool.setuptools.package-data]
${versions
  .map((v) => {
    return `"dinari_sbt_deployments.${_.snakeCase(v)}" = ["*.json"]`;
  })
  .join("\n")}
`;
  fs.writeFileSync(path.join(OUTPUT_DIR, "pyproject.toml"), pyProjectToml);
}

generate_python();
