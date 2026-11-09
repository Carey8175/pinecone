# Modified for pinecone desktop; see NOTICE.
# Get the version from package.json
VERSION=$(node -p "require('./apps/studio/package').version")

# Remove tag locally
git tag -d v$VERSION

# Remove tag remotely
git push https://github.com/Carey8175/pinecone.git :refs/tags/v$VERSION