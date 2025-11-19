# 📦 Complete NPM Publishing Commands

## ✅ Setup Complete!

Your project is now fully configured for NPM publishing under the `@llm-dev-ops` organization.

---

## 🎯 **STEP 1: Add NPM Token to GitHub Secrets** (ONE-TIME SETUP)

### Get Your NPM Token:

```bash
# Option 1: Login and get token
npm login

# Option 2: Create token via NPM website
# Visit: https://www.npmjs.com/settings/YOUR_USERNAME/tokens
# Click "Generate New Token" → Choose "Automation"
# Copy the token (starts with npm_...)
```

### Add Token to GitHub:

1. Go to: **https://github.com/globalbusinessadvisors/llm-marketplace/settings/secrets/actions**
2. Click **"New repository secret"**
3. Name: `NPM_TOKEN`
4. Value: Paste your NPM token
5. Click **"Add secret"**

✅ **That's the only manual setup needed!**

---

## 🚀 **STEP 2: Publish Packages** (Choose ONE method)

### 🏆 **RECOMMENDED: GitHub Actions (Easiest)**

**Just click a button in your browser!**

1. Go to: **https://github.com/globalbusinessadvisors/llm-marketplace/actions/workflows/npm-publish.yml**

2. Click the **"Run workflow"** dropdown button

3. Select:
   - **Branch**: `main`
   - **Version**: `patch` (for bug fixes) or `minor` (new features) or `major` (breaking changes)

4. Click green **"Run workflow"** button

5. ✅ **Done!** Monitor progress in the Actions tab

**That's it!** The workflow will automatically:
- Run all tests
- Build all packages
- Bump versions
- Publish to NPM
- Create git tags

---

### 🔧 **ALTERNATIVE: Local Release Script**

If you prefer command line:

```bash
# Ensure you're on main branch with latest code
git checkout main
git pull origin main

# Run release script (choose one):
./scripts/release.sh patch   # 1.1.0 → 1.1.1 (bug fixes)
./scripts/release.sh minor   # 1.1.0 → 1.2.0 (new features)
./scripts/release.sh major   # 1.1.0 → 2.0.0 (breaking changes)
```

**What it does:**
1. Pulls latest changes
2. Runs tests and linting
3. Builds all packages
4. Bumps version numbers
5. Creates commit and git tag
6. Pushes to GitHub
7. ✅ GitHub Actions automatically publishes to NPM

---

### 🔐 **MANUAL: Local Publishing** (Only if automated fails)

```bash
# 1. Login to NPM
npm login

# 2. Verify packages are ready
./scripts/check-packages.sh

# 3. Build all packages
npm run build

# 4. Publish
./scripts/publish-local.sh

# Or publish individually:
npm publish --workspace=sdks/javascript --access public
npm publish --workspace=services/model-marketplace --access public
npm publish --workspace=services/tenant-management --access public
npm publish --workspace=services/graphql-gateway --access public
```

---

## 📦 Published Package Names

After publishing, your packages will be available at:

| Package | NPM Link |
|---------|----------|
| **SDK** | https://www.npmjs.com/package/@llm-dev-ops/llm-marketplace-sdk |
| **Model Marketplace** | https://www.npmjs.com/package/@llm-dev-ops/model-marketplace |
| **Tenant Management** | https://www.npmjs.com/package/@llm-dev-ops/tenant-management |
| **GraphQL Gateway** | https://www.npmjs.com/package/@llm-dev-ops/graphql-gateway |

---

## 🧪 Testing & Verification

### Before Publishing:

```bash
# Run all checks
npm test                           # Run tests
npm run lint                       # Check code quality
npm run typecheck                  # Check TypeScript
npm run build                      # Build all packages
./scripts/check-packages.sh        # Validate package configs
npm run publish:dry-run            # See what would be published
```

### After Publishing:

```bash
# Verify packages are live
npm view @llm-dev-ops/llm-marketplace-sdk
npm view @llm-dev-ops/model-marketplace
npm view @llm-dev-ops/tenant-management
npm view @llm-dev-ops/graphql-gateway

# Test installation
npm install @llm-dev-ops/llm-marketplace-sdk
```

---

## 📝 Version Management

### Understanding Versions:

- **PATCH** (1.1.0 → 1.1.**1**): Bug fixes, no breaking changes
- **MINOR** (1.1.0 → 1.**2**.0): New features, backward compatible
- **MAJOR** (1.0.0 → **2**.0.0): Breaking changes

### Manual Version Bumping:

```bash
# Bump all packages
npm run version:patch    # Increment patch (1.1.0 → 1.1.1)
npm run version:minor    # Increment minor (1.1.0 → 1.2.0)
npm run version:major    # Increment major (1.1.0 → 2.0.0)
```

---

## 🛠️ Utility Scripts

All scripts are in `./scripts/`:

```bash
./scripts/release.sh [patch|minor|major]    # Full release workflow
./scripts/publish-local.sh                  # Manual publish to NPM
./scripts/check-packages.sh                 # Validate packages
```

---

## 📂 Files Created

All NPM publishing infrastructure has been set up:

### Configuration Files:
- ✅ `package.json` - Updated with npm workspaces and publish scripts
- ✅ `sdks/javascript/package.json` - Configured for `@llm-dev-ops/llm-marketplace-sdk`
- ✅ `services/model-marketplace/package.json` - Configured for `@llm-dev-ops/model-marketplace`
- ✅ `services/tenant-management/package.json` - Configured for `@llm-dev-ops/tenant-management`
- ✅ `services/graphql-gateway/package.json` - Configured for `@llm-dev-ops/graphql-gateway`

### NPM Configuration:
- ✅ `.npmignore` files in all packages (exclude dev files)
- ✅ `LICENSE` files in all packages
- ✅ `publishConfig` set to public access
- ✅ Repository URLs updated

### Automation:
- ✅ `.github/workflows/npm-publish.yml` - GitHub Actions workflow
- ✅ `scripts/release.sh` - Automated release script
- ✅ `scripts/publish-local.sh` - Manual publish script
- ✅ `scripts/check-packages.sh` - Package validation script

### Documentation:
- ✅ `NPM_PUBLISHING_QUICK_START.md` - Quick reference guide
- ✅ `docs/NPM_PUBLISHING_GUIDE.md` - Comprehensive guide
- ✅ `PUBLISH_TO_NPM_COMMANDS.md` - This file (command reference)

---

## ⚠️ Pre-Publishing Checklist

Before you publish, make sure:

- [ ] **NPM Token is added to GitHub Secrets** (Step 1 above)
- [ ] You're a member of **@llm-dev-ops** NPM organization
- [ ] On **main** branch: `git checkout main`
- [ ] Latest code: `git pull origin main`
- [ ] No uncommitted changes: `git status` is clean
- [ ] Tests pass: `npm test`
- [ ] Builds work: `npm run build`
- [ ] Packages valid: `./scripts/check-packages.sh`

---

## 🎬 Quick Start (TL;DR)

### First Time Setup:
```bash
# 1. Add NPM_TOKEN to GitHub Secrets (see Step 1 above)
# 2. Make sure you're in @llm-dev-ops NPM org
```

### To Publish:
```bash
# Option A: Use GitHub UI (EASIEST!)
# Go to: https://github.com/globalbusinessadvisors/llm-marketplace/actions/workflows/npm-publish.yml
# Click "Run workflow" → Select version type → Click "Run workflow"

# Option B: Use release script
./scripts/release.sh patch  # or minor/major
```

### To Verify:
```bash
# Check if published
npm view @llm-dev-ops/llm-marketplace-sdk

# Test installation
npm install @llm-dev-ops/llm-marketplace-sdk
```

---

## 🔗 Important Links

### GitHub:
- **Repository**: https://github.com/globalbusinessadvisors/llm-marketplace
- **Actions**: https://github.com/globalbusinessadvisors/llm-marketplace/actions
- **Secrets**: https://github.com/globalbusinessadvisors/llm-marketplace/settings/secrets/actions
- **Workflow**: https://github.com/globalbusinessadvisors/llm-marketplace/actions/workflows/npm-publish.yml

### NPM:
- **Organization**: https://www.npmjs.com/org/llm-dev-ops
- **Your Tokens**: https://www.npmjs.com/settings/YOUR_USERNAME/tokens

---

## 🆘 Troubleshooting

### "Permission denied" error
**Fix**: Make sure you're a member of `@llm-dev-ops` NPM organization
```bash
npm whoami  # Check your username
# Contact org owner to add you
```

### "Version already exists"
**Fix**: Bump version first
```bash
npm run version:patch  # or minor/major
```

### GitHub Actions failing
**Fix**: Check NPM_TOKEN secret is set correctly
- Go to: https://github.com/globalbusinessadvisors/llm-marketplace/settings/secrets/actions
- Update NPM_TOKEN if needed

### Build errors
**Fix**: Clean and rebuild
```bash
npm run clean
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📞 Need Help?

- **Full Guide**: See `docs/NPM_PUBLISHING_GUIDE.md` for detailed instructions
- **Quick Start**: See `NPM_PUBLISHING_QUICK_START.md` for quick reference
- **GitHub Issues**: https://github.com/globalbusinessadvisors/llm-marketplace/issues

---

## ✨ Summary

Everything is ready! To publish:

1. ✅ **Add NPM_TOKEN to GitHub Secrets** (one-time)
2. ✅ **Click "Run workflow" in GitHub Actions** (easiest!)
3. ✅ **Done!** Packages will be published automatically

**Or use**: `./scripts/release.sh patch`

That's it! 🎉
