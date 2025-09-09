import os

IGNORE_DIRS = {".git", "images"}

def generate_readme(root="."):
    lines = ["## 索引\n"]

    # 遍历第一级目录
    for entry in sorted(os.listdir(root)):
        path = os.path.join(root, entry)

        # 忽略文件夹
        if entry in IGNORE_DIRS:
            continue

        # 如果是文件夹
        if os.path.isdir(path):
            lines.append(f"**{entry}**")
            md_files = [
                f for f in sorted(os.listdir(path))
                if f.endswith(".md") and f.lower() != "readme.md"
            ]
            for f in md_files:
                rel_path = os.path.join(entry, f)
                # 用 <> 包裹路径，避免空格问题
                lines.append(f"- [{f}](<{rel_path}>)")
            lines.append("")  # 空行分隔

        # 如果是当前目录下的 md 文件
        elif entry.endswith(".md") and entry.lower() != "readme.md":
            lines.append(f"- [{entry}](<{entry}>)")

    readme_path = os.path.join(root, "README.md")
    with open(readme_path, "a", encoding="utf-8") as f:
        f.write("\n".join(lines))

    print("README.md 已生成。")


if __name__ == "__main__":
    generate_readme(".")