"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_angular_1 = require("nativescript-angular");
var settings_component_1 = require("./settings.component");
exports.ROUTES = [
    { path: 'settings', component: settings_component_1.SettingsComponent }
];
exports.navigableComponents = [
    settings_component_1.SettingsComponent
];
exports.routing = nativescript_angular_1.NativeScriptRouterModule.forChild(exports.ROUTES);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3Mucm91dGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNldHRpbmdzLnJvdXRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSw2REFBZ0U7QUFDaEUsMkRBQXlEO0FBRTVDLFFBQUEsTUFBTSxHQUFXO0lBQzdCLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsc0NBQWlCLEVBQUM7Q0FDakQsQ0FBQztBQUVXLFFBQUEsbUJBQW1CLEdBQUc7SUFDbEMsc0NBQWlCO0NBQ2pCLENBQUM7QUFFVyxRQUFBLE9BQU8sR0FBd0IsK0NBQXdCLENBQUMsUUFBUSxDQUFDLGNBQU0sQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuaW1wb3J0IHsgU2V0dGluZ3NDb21wb25lbnQgfSBmcm9tICcuL3NldHRpbmdzLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBST1VURVM6IFJvdXRlcyA9IFtcblx0eyBwYXRoOiAnc2V0dGluZ3MnLCBjb21wb25lbnQ6IFNldHRpbmdzQ29tcG9uZW50fVxuXTtcblxuZXhwb3J0IGNvbnN0IG5hdmlnYWJsZUNvbXBvbmVudHMgPSBbXG5cdFNldHRpbmdzQ29tcG9uZW50XG5dO1xuXG5leHBvcnQgY29uc3Qgcm91dGluZzogTW9kdWxlV2l0aFByb3ZpZGVycyA9IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChST1VURVMpO1xuIl19