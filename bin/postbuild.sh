#!/bin/zsh

mv dist docs && \
echo -n quillstack.com > docs/CNAME && \
mv docs/_assets docs/assets && \
for i in `ls -1 docs/*.html`; do sed -i '' 's/_assets/assets/g' $i; done
