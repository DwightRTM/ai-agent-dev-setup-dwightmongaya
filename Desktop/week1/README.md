# AI Agent Developer Program - Week 1 Setup

**Developer:** Dwight Richard T. Mongaya  
**Cohort:** Fullstack - Week 1  
**Start Date:** March 14, 2026

---

## Development Environment Checklist

### ✅ Node.js Installed

**Instructions to verify:**
1. Open PowerShell or Command Prompt
2. Run: `node --version`
3. Take a screenshot showing the output (should display v18+ or higher)

**Screenshot:**
![Node](mcp-configs/images/node.png)
```
[v25.8.0]
```

---

### ✅ Git Installed

**Instructions to verify:**
1. Open PowerShell or Command Prompt
2. Run: `git --version`
3. Take a screenshot showing the output

**Screenshot:**
![Git Version](mcp-configs/images/git.png)
```
[git version 2.53.0.windows.1]
```

---

### ✅ VS Code Insider with GitHub Copilot Enabled

**Instructions to verify:**
1. Open VS Code Insider (or check that you're running latest VS Code)
2. Ensure GitHub Copilot extension is installed (shown in Extensions sidebar)
3. Sign in to GitHub through VS Code
4. Take a screenshot showing:
   - VS Code window title/menu
   - Copilot extension in the Extensions panel or active in status bar
   - File open for context

**Screenshot:**
![VS Code Insider with Copilot](mcp-configs/images/vswithcopilot.png)

---

## MCP Servers: Purpose & Functionality

### 1. Filesystem MCP Server
**Purpose:** Direct file system access from Claude  
**Functionality:**
- Read/write files in your project
- Create and delete files/directories
- Search for files by pattern
- Enable Claude to understand your project structure

---

### 2. GitHub MCP Server
**Purpose:** Interact with GitHub repositories directly  
**Functionality:**
- Read repository contents and file structure
- View commit history and branches
- Access pull requests and issues
- Retrieve repository information and statistics

---