import * as Electron from '../../../desktop';
export declare class ElectronService {
    private _electron;
    private readonly electron;
    /**
     * determines if SPA is running in Electron
     */
    readonly isElectronApp: boolean;
    readonly isMacOS: boolean;
    readonly isWindows: boolean;
    readonly isLinux: boolean;
    readonly isX86: boolean;
    readonly isX64: boolean;
    readonly isArm: boolean;
    readonly desktopCapturer: Electron.DesktopCapturer;
    readonly ipcRenderer: Electron.IpcRenderer;
    readonly remote: Electron.Remote;
    readonly webFrame: Electron.WebFrame;
    readonly clipboard: Electron.Clipboard;
    readonly crashReporter: Electron.CrashReporter;
    readonly process: any;
    readonly nativeImage: typeof Electron.nativeImage;
    readonly screen: Electron.Screen;
    readonly shell: Electron.Shell;
}
