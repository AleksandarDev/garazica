import LocalStorageService from "./LocalStorageService";

class AppSettingsService {
    static getIsNightMode() : boolean {
        const hoursOfDay = new Date().getHours();
        const isDarkDefault = !(hoursOfDay > 6 && hoursOfDay < 20);
        const savedSetting = LocalStorageService.getItem('isNightMode');
        if (savedSetting == null)
            return isDarkDefault;
        return savedSetting.toLowerCase() === 'true';
    }

    static setIsNightMode(isNightMode: boolean) : void {
        LocalStorageService.setItem('isNightMode', JSON.stringify(isNightMode));
    }
}

export default AppSettingsService;