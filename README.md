# EMA - Endpoint Management Assistant

EMA is an AI-powered desktop application that lets IT administrators manage Microsoft Configuration Manager (SCCM) and Microsoft Intune through natural language. Type what you need, EMA handles the rest.

---

## What does EMA do?

Managing endpoints means constantly switching between the SCCM console, the Intune portal, and PowerShell. EMA brings both environments into a single chat interface. You describe the task in your own language, EMA generates and executes the right script, and you see the results immediately.

It works with any major AI provider. You bring your own API key and choose the model you prefer.

---

## What You Can Manage

**SCCM / Configuration Manager**
- Device queries and hardware inventory
- Device collection creation and management
- Application and software update deployments
- Client health monitoring and remediation
- Automatic Deployment Rules (ADR)
- Distribution point content management
- Boundary group queries
- Admin audit and activity reporting

**Microsoft Intune**
- Device compliance status and policy reporting
- Non-compliant device detection
- Devices not synced within a given timeframe
- Disk encryption (BitLocker) status
- Application deployment and installation status
- Autopilot device and profile management
- Compliance policy assignment reporting
- User sign-in activity

---

## Example Prompts

**SCCM**
- `List all Windows 11 devices in the site`
- `Show me all devices that haven't checked in for 30 days`
- `Find all devices with less than 8GB of RAM`
- `List all devices where the C: drive has less than 10GB free`
- `Create a collection for the Finance department`
- `Create a collection of devices that haven't sent hardware inventory in 14 days`
- `Find all devices with an inactive client health status and trigger remediation`
- `Trigger a hardware inventory cycle on DESKTOP-001`
- `Show me all empty collections`
- `Show me admin accounts that modified deployments in the last 30 days`

**Intune**
- `List all non-compliant devices`
- `Show me all devices that haven't synced in the last 30 days`
- `List all devices where disk encryption is not enabled`
- `Show me all apps with failed installations in the last 7 days`
- `List all compliance policies and their assigned groups`
- `List all Autopilot registered devices and their deployment profiles`

---

## Requirements

- Windows 10 / 11 or Windows Server 2019 / 2022 / 2025 (64-bit)
- .NET 8.0 or later
- PowerShell 7 or later (required for Microsoft Graph / Intune features)
- Microsoft Graph PowerShell SDK (`Install-Module Microsoft.Graph`)
- Microsoft Configuration Manager Admin Console installed on the same machine (for SCCM features)
- `SMS_ADMIN_UI_PATH` environment variable set (configured automatically by the SCCM Admin Console installer)
- An API key from any supported LLM provider

---

## Getting Started

**1. Download**

Download the latest release from the [Releases](../../releases) page and extract to a folder of your choice.

**2. Launch EMA**

Run `EMA.exe`. On first launch, the Settings window opens automatically.

**3. Configure your LLM provider**

Select your preferred provider, enter your API key and model name, then click Save Settings. Your credentials are stored locally in `appsettings.json` and never leave your machine.

**4. Start managing**

EMA connects to your SCCM and Intune environments automatically. Type your first request and press Enter.

---

## How It Works

```
Your prompt
    ↓
Intent detection
    ↓
Environment discovery (site info, collections, apps, DPs / Intune via Graph)
    ↓
LLM call (your chosen provider and model)
    ↓
Script post-processing and validation
    ↓
PowerShell execution
    ↓
Results
```

---

## Privacy and Security

EMA runs entirely on your local machine. Your SCCM and Intune environment data is never stored or transmitted externally. Only the text of your prompt and relevant context is sent to the LLM provider you configure. API keys are stored locally in `appsettings.json`.

---

## License

MIT License - see [LICENSE](LICENSE) for details.

---

## Author

Built by [Mert Efe Kanlıkılıç](https://mertefekanlikilic.com)

*EMA is an independent community project and is not affiliated with or endorsed by Microsoft.*
