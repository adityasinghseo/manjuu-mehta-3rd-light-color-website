import os
import re

dir_path = "src"

for root, _, files in os.walk(dir_path):
    for file in files:
        if file.endswith(".tsx"):
            file_path = os.path.join(root, file)
            with open(file_path, "r") as f:
                content = f.read()

            new_content = content
            
            # Replace tailwind classes
            new_content = new_content.replace('text-[9px]', 'text-sm')
            new_content = new_content.replace('text-[9.5px]', 'text-sm')
            new_content = new_content.replace('text-[10px]', 'text-sm')
            new_content = new_content.replace('text-[11px]', 'text-sm')
            new_content = new_content.replace('text-xs', 'text-sm md:text-base')
            
            # Replace inline fontSize numbers
            new_content = new_content.replace('fontSize: 9', 'fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)"')
            new_content = new_content.replace('fontSize: 10', 'fontSize: "clamp(1rem, 1.2vw, 1.1rem)"')
            new_content = new_content.replace('fontSize: 11', 'fontSize: "clamp(1rem, 1.25vw, 1.1rem)"')
            new_content = new_content.replace('fontSize: 12', 'fontSize: "clamp(1.05rem, 1.3vw, 1.15rem)"')
            new_content = new_content.replace('fontSize: 13', 'fontSize: "clamp(1.08rem, 1.35vw, 1.18rem)"')
            new_content = new_content.replace('fontSize: 14', 'fontSize: "clamp(1.1rem, 1.4vw, 1.2rem)"')
            new_content = new_content.replace('fontSize: 15', 'fontSize: "clamp(1.12rem, 1.4vw, 1.2rem)"')
            new_content = new_content.replace('fontSize: 16', 'fontSize: "clamp(1.15rem, 1.5vw, 1.25rem)"')

            # Also catch clamp bounds that are too small
            new_content = re.sub(r'clamp\(0\.75rem,.*?\)','clamp(1.05rem, 1.3vw, 1.15rem)', new_content)
            new_content = re.sub(r'clamp\(0\.8rem,.*?\)','clamp(1.08rem, 1.3vw, 1.18rem)', new_content)
            new_content = re.sub(r'clamp\(0\.85rem,.*?\)','clamp(1.1rem, 1.3vw, 1.2rem)', new_content)
            new_content = re.sub(r'clamp\(0\.9rem,.*?\)','clamp(1.1rem, 1.35vw, 1.2rem)', new_content)
            new_content = re.sub(r'clamp\(0\.95rem,.*?\)','clamp(1.12rem, 1.4vw, 1.25rem)', new_content)
            new_content = re.sub(r'clamp\(1rem,.*?\)','clamp(1.15rem, 1.45vw, 1.25rem)', new_content)

            if new_content != content:
                with open(file_path, "w") as f:
                    f.write(new_content)
                print(f"Updated fonts in {file_path}")

