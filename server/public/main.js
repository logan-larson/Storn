(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\logan\Projects\Storn\client\src\main.ts */"zUnb");


/***/ }),

/***/ "0soQ":
/*!*******************************************!*\
  !*** ./src/app/services/class.service.ts ***!
  \*******************************************/
/*! exports provided: ClassService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassService", function() { return ClassService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class ClassService {
    constructor(http) {
        this.http = http;
        this.classes = [];
    }
    getClasses(cb) {
        // Http GET to retrieve user's classes
        this.http
            .get('/api/v1/class')
            .subscribe((classes) => {
            this.classes = classes;
            cb(classes);
        });
    }
    addClass(className, cb) {
        this.http
            .post('/api/v1/class', { name: className })
            .subscribe((classItem) => {
            this.classes.push({
                _id: classItem._id,
                userId: classItem.userId,
                name: classItem.name,
                color: classItem.color,
            });
            cb();
        });
    }
    deleteClass(classItem, cb) {
        if (confirm(`Are you sure you want to delete ${classItem.name}?
                \nThis will delete ALL projects in a class.`)) {
            this.http
                .request('delete', '/api/v1/class', { body: classItem })
                .subscribe((deletedClass) => {
                this.classes = this.classes.filter(c => c != classItem);
                cb();
            });
        }
    }
}
ClassService.ɵfac = function ClassService_Factory(t) { return new (t || ClassService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ClassService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClassService, factory: ClassService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "1WeW":
/*!****************************************************************************************************************!*\
  !*** ./src/app/components/home/project/project-details/edit-project-details/edit-project-details.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: EditProjectDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProjectDetailsComponent", function() { return EditProjectDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/project.service */ "c3AT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class EditProjectDetailsComponent {
    constructor(projectService) {
        this.projectService = projectService;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.name = this.details.name;
        this.description = this.details.description;
        this.deadline = this.details.deadline;
        this.timeHours = Math.floor(Number(this.details.totalTimeEstimated) / 3600000);
        this.timeMinutes = Math.floor((Number(this.details.totalTimeEstimated) -
            Number(this.timeHours) * 3600000) /
            60000);
    }
    saveProjectDetails() {
        let t = Number(this.timeHours) * 3600000 + Number(this.timeMinutes) * 60000;
        let d = this.details;
        d.name = this.name;
        d.description = this.description;
        d.deadline = this.deadline;
        d.totalTimeEstimated = t;
        this.projectService.saveProjectDetails(this.project._id, d, () => {
            this.close.emit('close me');
        });
    }
    cancel() {
        this.close.emit('close me');
    }
}
EditProjectDetailsComponent.ɵfac = function EditProjectDetailsComponent_Factory(t) { return new (t || EditProjectDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"])); };
EditProjectDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditProjectDetailsComponent, selectors: [["app-edit-project-details"]], inputs: { details: "details", project: "project" }, outputs: { close: "close" }, decls: 28, vars: 9, consts: [[1, "container"], ["id", "header", 1, "header"], ["id", "content", 1, "content"], ["id", "nameLabel"], ["id", "name", "type", "text", 3, "placeholder", "ngModel", "ngModelChange"], ["id", "descriptionLabel"], ["id", "description", "type", "text", 3, "placeholder", "ngModel", "ngModelChange"], ["id", "deadlineLabel"], ["id", "deadline", "type", "date", 3, "ngModel", "ngModelChange"], ["id", "timeHoursLabel"], ["id", "timeHours", "type", "number", 3, "placeholder", "ngModel", "ngModelChange"], ["id", "timeMinutesLabel"], ["id", "timeMinutes", "type", "number", "min", "0", "max", "59", 3, "placeholder", "ngModel", "ngModelChange"], ["id", "saveProjectDetails", 1, "submit", 3, "click"], ["id", "cancel", 1, "cancel", 3, "click"]], template: function EditProjectDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Project Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Project Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditProjectDetailsComponent_Template_input_ngModelChange_7_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Description: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditProjectDetailsComponent_Template_input_ngModelChange_11_listener($event) { return ctx.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Deadline: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditProjectDetailsComponent_Template_input_ngModelChange_15_listener($event) { return ctx.deadline = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Estimated Time Hours: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditProjectDetailsComponent_Template_input_ngModelChange_19_listener($event) { return ctx.timeHours = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Estimated Time Minutes: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditProjectDetailsComponent_Template_input_ngModelChange_23_listener($event) { return ctx.timeMinutes = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditProjectDetailsComponent_Template_div_click_24_listener() { return ctx.saveProjectDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Save Project Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditProjectDetailsComponent_Template_div_click_26_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.deadline);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.timeHours);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.timeHours);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.timeMinutes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.timeMinutes);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"]], styles: [".container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  z-index: 1;\r\n}\r\n\r\n.header[_ngcontent-%COMP%] {\r\n  font-size: 48px;\r\n  color: #fff;\r\n  text-align: center;\r\n  background-color: #303435;\r\n  padding: 20px 75px;\r\n  border-top-left-radius: 20px;\r\n  border-top-right-radius: 20px;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  background-color: #494f51;\r\n  padding: 20px 75px;\r\n  border-bottom-left-radius: 20px;\r\n  border-bottom-right-radius: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n  margin-right: 5px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n  border-radius: 24px;\r\n  border-width: 0px;\r\n  padding: 10px 20px;\r\n  margin-bottom: 10px;\r\n  float: right;\r\n  width: 40%;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n}\r\n\r\n.submit[_ngcontent-%COMP%] {\r\n  border-radius: 38px;\r\n  color: #c7c7c7;\r\n  background-color: var(--blue-button);\r\n  font-size: 24px;\r\n  padding: 10px 20px;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  margin: 5px auto;\r\n  text-align: center;\r\n}\r\n\r\n.submit[_ngcontent-%COMP%]:hover {\r\n  background-color: var(--blue-button-hover);\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n\r\n.cancel[_ngcontent-%COMP%] {\r\n  border-radius: 38px;\r\n  color: #c7c7c7;\r\n  background-color: #861e1e;\r\n  font-size: 24px;\r\n  padding: 10px 20px;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  margin: 5px auto;\r\n  text-align: center;\r\n}\r\n\r\n.cancel[_ngcontent-%COMP%]:hover {\r\n  background-color: #9e2828;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtcHJvamVjdC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCIiwiZmlsZSI6ImVkaXQtcHJvamVjdC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogNDhweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzQzNTtcclxuICBwYWRkaW5nOiAyMHB4IDc1cHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTRmNTE7XHJcbiAgcGFkZGluZzogMjBweCA3NXB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHdpZHRoOiA0MCU7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uc3VibWl0IHtcclxuICBib3JkZXItcmFkaXVzOiAzOHB4O1xyXG4gIGNvbG9yOiAjYzdjN2M3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtYnV0dG9uKTtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBtYXJnaW46IDVweCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnN1Ym1pdDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1idXR0b24taG92ZXIpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNhbmNlbCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMzhweDtcclxuICBjb2xvcjogI2M3YzdjNztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODYxZTFlO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FuY2VsOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWUyODI4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "8dDo":
/*!**********************************************************************************!*\
  !*** ./src/app/components/home/project/project-board/project-board.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProjectBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectBoardComponent", function() { return ProjectBoardComponent; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_milestone_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/milestone.service */ "eS/N");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ProjectBoardComponent_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectBoardComponent_div_3_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const todoMilestone_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r5.selectMilestone(todoMilestone_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const todoMilestone_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", todoMilestone_r4.name, " ");
} }
function ProjectBoardComponent_div_3_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectBoardComponent_div_3_div_10_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const doingMilestone_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.selectMilestone(doingMilestone_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const doingMilestone_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", doingMilestone_r7.name, " ");
} }
function ProjectBoardComponent_div_3_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectBoardComponent_div_3_div_15_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const doneMilestone_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r11.selectMilestone(doneMilestone_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const doneMilestone_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", doneMilestone_r10.name, " ");
} }
function ProjectBoardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function ProjectBoardComponent_div_3_Template_div_cdkDropListDropped_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.drop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Todo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ProjectBoardComponent_div_3_div_5_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function ProjectBoardComponent_div_3_Template_div_cdkDropListDropped_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.drop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Doing");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ProjectBoardComponent_div_3_div_10_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function ProjectBoardComponent_div_3_Template_div_cdkDropListDropped_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.drop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ProjectBoardComponent_div_3_div_15_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkDropListData", ctx_r0.board.todoColumn);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.board.todoColumn);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkDropListData", ctx_r0.board.doingColumn);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.board.doingColumn);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkDropListData", ctx_r0.board.doneColumn);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.board.doneColumn);
} }
class ProjectBoardComponent {
    constructor(milestoneService) {
        this.milestoneService = milestoneService;
    }
    ngOnInit() {
    }
    drop(event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
        // This is where you send an http req to server to update project
    }
    selectMilestone(milestone) {
        this.milestoneService.setSelectedMilestone(milestone);
        console.log(milestone.name);
    }
}
ProjectBoardComponent.ɵfac = function ProjectBoardComponent_Factory(t) { return new (t || ProjectBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_milestone_service__WEBPACK_IMPORTED_MODULE_2__["MilestoneService"])); };
ProjectBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProjectBoardComponent, selectors: [["app-project-board"]], inputs: { board: "board" }, decls: 4, vars: 1, consts: [[1, "container"], [1, "header"], ["class", "body", "cdkDropListGroup", "", 4, "ngIf"], ["cdkDropListGroup", "", 1, "body"], ["cdkDropList", "", 1, "milestone-list", 3, "cdkDropListData", "cdkDropListDropped"], [1, "column-header"], [1, "column-body"], ["class", "milestone", "cdkDrag", "", 3, "click", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "milestone", 3, "click"]], template: function ProjectBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Project Board");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProjectBoardComponent_div_3_Template, 16, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.board);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDropListGroup"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDrag"]], styles: [".container[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.header[_ngcontent-%COMP%] {\r\n  font-size: 32px;\r\n  color: #fff;\r\n  padding: 20px;\r\n  background-color: #303435;\r\n  border-top-left-radius: 38px;\r\n  border-top-right-radius: 38px;\r\n}\r\n\r\n.body[_ngcontent-%COMP%] {\r\n  background-color: #5c6466;\r\n  color: #fff;\r\n  padding: 20px;\r\n  border-bottom-left-radius: 38px;\r\n  border-bottom-right-radius: 38px;\r\n  display: flex;\r\n}\r\n\r\n.cdk-drag-preview[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n  border-radius: 4px;\r\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n}\r\n\r\n.cdk-drag-animating[_ngcontent-%COMP%] {\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n\r\n.milestone-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .milestone[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n\r\n.milestone-list[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n  margin: 0px auto;\r\n}\r\n\r\n.column-header[_ngcontent-%COMP%] {\r\n  font-size: 32px;\r\n  color: #fff;\r\n  padding: 20px;\r\n  background-color: #303435;\r\n  border-top-left-radius: 38px;\r\n  border-top-right-radius: 38px;\r\n  text-align: center;\r\n}\r\n\r\n.column-body[_ngcontent-%COMP%] {\r\n  background-color: #494f51;\r\n  color: #fff;\r\n  padding: 20px;\r\n  border-bottom-left-radius: 38px;\r\n  border-bottom-right-radius: 38px;\r\n}\r\n\r\n.milestone[_ngcontent-%COMP%] {\r\n  background-color: #303435;\r\n  border-radius: 24px;\r\n  font-size: 20px;\r\n  color: #c7c7c7;\r\n  padding: 20px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.milestone[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n  background-color: #3b4041;\r\n  color: #fff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsYUFBYTtFQUNiLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLGdDQUFnQztFQUNoQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCOzBFQUN3RTtBQUMxRTs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHNEQUFzRDtBQUN4RDs7QUFFQTtFQUNFLHNEQUFzRDtBQUN4RDs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsY0FBYztFQUNkLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYiIsImZpbGUiOiJwcm9qZWN0LWJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzNDM1O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDM4cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDM4cHg7XHJcbn1cclxuXHJcbi5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM2NDY2O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMzhweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uY2RrLWRyYWctcHJldmlldyB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi5taWxlc3RvbmUtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5taWxlc3RvbmU6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuLm1pbGVzdG9uZS1saXN0IHtcclxuICB3aWR0aDogMzAlO1xyXG4gIG1hcmdpbjogMHB4IGF1dG87XHJcbn1cclxuXHJcbi5jb2x1bW4taGVhZGVyIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzNDM1O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDM4cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDM4cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29sdW1uLWJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTRmNTE7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzOHB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzOHB4O1xyXG59XHJcblxyXG4ubWlsZXN0b25lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzNDM1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjYzdjN2M3O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4ubWlsZXN0b25lOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiNDA0MTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "8hpD":
/*!*******************************************!*\
  !*** ./src/app/services/timer.service.ts ***!
  \*******************************************/
/*! exports provided: TimerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerService", function() { return TimerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.service */ "c3AT");



class TimerService {
    constructor(http, projectService) {
        this.http = http;
        this.projectService = projectService;
    }
    createSession(cb) {
        let s = {
            start: new Date(),
            totalPauseTime: 0,
            totalTime: 0,
            projectId: this.projectService.getSelectedProject()._id,
        };
        this.http.post('/api/v1/session/start', s).subscribe((session) => {
            cb(session);
        });
    }
    pauseStart(s, cb) {
        this.http.put('/api/v1/session/pauseStart', s).subscribe((msg) => {
            cb(msg);
        });
    }
    pauseEnd(s, cb) {
        console.log(`session._id: ${s._id}`);
        this.http.put('/api/v1/session/pauseEnd', s).subscribe((t) => {
            console.log(t);
            cb(t);
        });
    }
    endSession(s, cb) {
        this.http.put('/api/v1/session/end', s).subscribe((t) => {
            let p = this.projectService.getSelectedProject();
            p.details.totalTimeActual = t.totalTime;
            cb(t.sessionTime);
        });
    }
}
TimerService.ɵfac = function TimerService_Factory(t) { return new (t || TimerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"])); };
TimerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TimerService, factory: TimerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Ab0b":
/*!**************************************************************!*\
  !*** ./src/app/components/home/project/project.component.ts ***!
  \**************************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/project.service */ "c3AT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-details/project-details.component */ "VLh8");
/* harmony import */ var _project_timer_project_timer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-timer/project-timer.component */ "xovz");





function ProjectComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.project.details.name);
} }
function ProjectComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-project-details", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removeProjectEmitter", function ProjectComponent_div_2_Template_app_project_details_removeProjectEmitter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.removeProject(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-project-timer", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("project", ctx_r1.project)("details", ctx_r1.project.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("project", ctx_r1.project);
} }
class ProjectComponent {
    constructor(projectService) {
        this.projectService = projectService;
        this.project = null;
        // Can rename in future
        // Lets component know when user switches projects
        this.projectService.getProjectEmitter.subscribe(() => {
            this.getProject();
        });
        this.projectService.updateDetailsEmitter.subscribe((id) => {
            this.projectService.getProjectById(id, (project) => {
                this.project = project;
            });
        });
    }
    ngOnInit() {
        /*
        this.projectService.getSelectedProject((project) => {
          this.project = project;
        });
        */
    }
    getProject() {
        this.project = this.projectService.getSelectedProject();
    }
    removeProject() {
        this.projectService.deleteProject(this.project, () => { });
    }
}
ProjectComponent.ɵfac = function ProjectComponent_Factory(t) { return new (t || ProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"])); };
ProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectComponent, selectors: [["app-project"]], decls: 3, vars: 2, consts: [[1, "container"], ["class", "title", 4, "ngIf"], ["class", "body", 4, "ngIf"], [1, "title"], [1, "body"], [3, "project", "details", "removeProjectEmitter"], [3, "project"]], template: function ProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProjectComponent_div_2_Template, 3, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_3__["ProjectDetailsComponent"], _project_timer_project_timer_component__WEBPACK_IMPORTED_MODULE_4__["ProjectTimerComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n  padding: 0px 20px;\r\n  color: #fff;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  font-size: 48px;\r\n  background-color: #303435;\r\n  border-top-left-radius: 20px;\r\n  border-top-right-radius: 20px;\r\n  text-align: center;\r\n  padding: 20px;\r\n  margin: auto;\r\n}\r\n\r\n.body[_ngcontent-%COMP%] {\r\n  background-color: #494f51;\r\n  border-bottom-left-radius: 20px;\r\n  border-bottom-right-radius: 20px;\r\n  padding: 20px;\r\n  margin: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsK0JBQStCO0VBQy9CLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IsWUFBWTtBQUNkIiwiZmlsZSI6InByb2plY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDBweCAyMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogNDhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzNDM1O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NGY1MTtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project/project.component */ "Ab0b");
/* harmony import */ var _project_tree_project_tree_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-tree/project-tree.component */ "hgw6");





function HomeComponent_app_project_tree_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-project-tree", 5);
} }
function HomeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_2_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.showProjectTree = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hide Project Tree");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_ng_template_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.showProjectTree = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Show Project Tree");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor(authService) {
        this.authService = authService;
        this.showProjectTree = true;
    }
    ngOnInit() {
        this.authService.validateUser();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 6, vars: 3, consts: [[1, "container"], ["class", "tree", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["hiddenProjectTree", ""], [1, "project"], [1, "tree"], [1, "button", 3, "click"], [1, "button", "show-button", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_app_project_tree_1_Template, 1, 0, "app-project-tree", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_ng_template_3_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-project", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showProjectTree);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showProjectTree)("ngIfElse", _r2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _project_project_component__WEBPACK_IMPORTED_MODULE_3__["ProjectComponent"], _project_tree_project_tree_component__WEBPACK_IMPORTED_MODULE_4__["ProjectTreeComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin: 10px;\r\n}\r\n\r\n.tree[_ngcontent-%COMP%] {\r\n  flex-grow: 1;\r\n  height: 100%;\r\n  border-radius: 10px;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  writing-mode: vertical-rl;\r\n  border-radius: 20px;\r\n  color: #c7c7c7;\r\n  background-color: #303435;\r\n  font-size: 18px;\r\n  padding: 10px;\r\n  margin: 0px;\r\n  margin-top: 150px;\r\n  margin-left: 5px;\r\n  height: 150px;\r\n  text-align: center;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:hover {\r\n  background-color: #3b4041;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n\r\n.show-button[_ngcontent-%COMP%] {\r\n  border-radius: 20px;\r\n}\r\n\r\n.project[_ngcontent-%COMP%] {\r\n  flex-grow: 5;\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .tree[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n  }\r\n\r\n  .button[_ngcontent-%COMP%] {\r\n    writing-mode: horizontal-tb;\r\n    border-bottom-left-radius: 20px;\r\n    border-top-right-radius: 0px;\r\n    width: 200px;\r\n    margin: 0px auto;\r\n    height: auto;\r\n  }\r\n\r\n  .show-button[_ngcontent-%COMP%] {\r\n    border-radius: 20px;\r\n  }\r\n\r\n  .project[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsYUFBYTtFQUNiLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSwyQkFBMkI7SUFDM0IsK0JBQStCO0lBQy9CLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4udHJlZSB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgY29sb3I6ICNjN2M3Yzc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzQzNTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDBweDtcclxuICBtYXJnaW4tdG9wOiAxNTBweDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I0MDQxO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNob3ctYnV0dG9uIHtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4ucHJvamVjdCB7XHJcbiAgZmxleC1ncm93OiA1O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC50cmVlIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5idXR0b24ge1xyXG4gICAgd3JpdGluZy1tb2RlOiBob3Jpem9udGFsLXRiO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnNob3ctYnV0dG9uIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAucHJvamVjdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'client';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "VLh8":
/*!**************************************************************************************!*\
  !*** ./src/app/components/home/project/project-details/project-details.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ProjectDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailsComponent", function() { return ProjectDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/project.service */ "c3AT");
/* harmony import */ var src_app_services_time_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/time.service */ "q+Sf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _edit_project_details_edit_project_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-project-details/edit-project-details.component */ "1WeW");






function ProjectDetailsComponent_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" Total Time Actual: ", ctx_r2.timeService.formatUnderTen(ctx_r2.timeService.calculateHours(ctx_r2.details.totalTimeActual)), ":", ctx_r2.timeService.formatUnderTen(ctx_r2.timeService.calculateMinutes(ctx_r2.details.totalTimeActual)), ":", ctx_r2.timeService.formatUnderTen(ctx_r2.timeService.calculateSeconds(ctx_r2.details.totalTimeActual)), " ");
} }
function ProjectDetailsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProjectDetailsComponent_div_3_div_5_Template, 2, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectDetailsComponent_div_3_Template_div_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.showEditProjectDetailsComponent = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Edit Project Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectDetailsComponent_div_3_Template_div_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.removeProject(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Remove Project ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Description: ", ctx_r0.details.description, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" Total Time Estimated: ", ctx_r0.timeService.formatUnderTen(ctx_r0.timeService.calculateHours(ctx_r0.details.totalTimeEstimated)), ":", ctx_r0.timeService.formatUnderTen(ctx_r0.timeService.calculateMinutes(ctx_r0.details.totalTimeEstimated)), ":", ctx_r0.timeService.formatUnderTen(ctx_r0.timeService.calculateSeconds(ctx_r0.details.totalTimeEstimated)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.details.totalTimeActual);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Deadline: ", ctx_r0.details.deadline, "");
} }
function ProjectDetailsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-edit-project-details", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function ProjectDetailsComponent_div_4_Template_app_edit_project_details_close_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.showEditProjectDetailsComponent = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("project", ctx_r1.project)("details", ctx_r1.details);
} }
class ProjectDetailsComponent {
    constructor(projectService, timeService) {
        this.projectService = projectService;
        this.timeService = timeService;
        this.removeProjectEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selected = false;
        this.showEditProjectDetailsComponent = false;
        this.projectService.updateDetailsEmitter.subscribe((id) => {
            this.projectService.getProjectById(id, (project) => {
                this.project = project;
            });
        });
    }
    ngOnInit() { }
    changeSelected() {
        this.selected = !this.selected;
    }
    removeProject() {
        this.removeProjectEmitter.emit('delete me');
    }
}
ProjectDetailsComponent.ɵfac = function ProjectDetailsComponent_Factory(t) { return new (t || ProjectDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_time_service__WEBPACK_IMPORTED_MODULE_2__["TimeService"])); };
ProjectDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectDetailsComponent, selectors: [["app-project-details"]], inputs: { details: "details", project: "project" }, outputs: { removeProjectEmitter: "removeProjectEmitter" }, decls: 5, vars: 4, consts: [[1, "container"], [1, "header", 3, "click"], ["class", "body", 4, "ngIf"], [4, "ngIf"], [1, "body"], ["id", "editProjectDetails", 1, "button", 3, "click"], ["id", "removeProjectButton", 1, "button", "red", 2, "margin-top", "10px", 3, "click"], [3, "project", "details", "close"]], template: function ProjectDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectDetailsComponent_Template_div_click_1_listener() { return ctx.changeSelected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProjectDetailsComponent_div_3_Template, 12, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectDetailsComponent_div_4_Template, 2, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showEditProjectDetailsComponent);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _edit_project_details_edit_project_details_component__WEBPACK_IMPORTED_MODULE_4__["EditProjectDetailsComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.header[_ngcontent-%COMP%] {\r\n  font-size: 32px;\r\n  color: #fff;\r\n  padding: 20px;\r\n  background-color: #303435;\r\n  border-radius: 38px;\r\n}\r\n\r\n.selected[_ngcontent-%COMP%] {\r\n  border-bottom-left-radius: 0px;\r\n  border-bottom-right-radius: 0px;\r\n  color: #fff;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]:hover {\r\n  background-color: #3b4041;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n\r\n.body[_ngcontent-%COMP%] {\r\n  background-color: #5c6466;\r\n  color: #fff;\r\n  font-size: 24px;\r\n  padding: 20px;\r\n  border-bottom-left-radius: 38px;\r\n  border-bottom-right-radius: 38px;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  border-radius: 38px;\r\n  color: #c7c7c7;\r\n  background-color: #304969;\r\n  font-size: 24px;\r\n  padding: 10px 20px;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  margin: auto;\r\n  text-align: center;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:hover {\r\n  background-color: #39567c;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n\r\n.red[_ngcontent-%COMP%] {\r\n  background-color: rgb(134, 30, 30);\r\n}\r\n\r\n.red[_ngcontent-%COMP%]:hover {\r\n  background-color: rgb(158, 40, 40);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0IsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsYUFBYTtFQUNiLCtCQUErQjtFQUMvQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEMiLCJmaWxlIjoicHJvamVjdC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzNDM1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDM4cHg7XHJcbn1cclxuXHJcbi5zZWxlY3RlZCB7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5oZWFkZXI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjQwNDE7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjNjQ2NjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzOHB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzOHB4O1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBib3JkZXItcmFkaXVzOiAzOHB4O1xyXG4gIGNvbG9yOiAjYzdjN2M3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDQ5Njk7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5NTY3YztcclxuICBjb2xvcjogI2ZmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5yZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzQsIDMwLCAzMCk7XHJcbn1cclxuXHJcbi5yZWQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTgsIDQwLCA0MCk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "XHxH":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/home/project-tree/class-item/add-project/add-project.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AddProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProjectComponent", function() { return AddProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/project.service */ "c3AT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class AddProjectComponent {
    constructor(projectService) {
        this.projectService = projectService;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onDocumentClick(event) {
        if (
        // Gotta be a better way to optimize this
        event.target != document.getElementById('header')
            && event.target != document.getElementById('content')
            && event.target != document.getElementById('projectName')
            && event.target != document.getElementById('addProject')
            && event.target != document.getElementById('addProjectButton')) {
            this.close.emit("close me");
        }
    }
    ngOnInit() {
        // Focus on input
    }
    addProject() {
        this.projectService.addProject(this.classItem, this.projectName, () => {
            this.close.emit("close me");
        });
    }
}
AddProjectComponent.ɵfac = function AddProjectComponent_Factory(t) { return new (t || AddProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"])); };
AddProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddProjectComponent, selectors: [["app-add-project"]], hostBindings: function AddProjectComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddProjectComponent_click_HostBindingHandler($event) { return ctx.onDocumentClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, inputs: { classItem: "classItem", projectName: "projectName" }, outputs: { close: "close" }, decls: 7, vars: 1, consts: [[1, "container"], ["id", "header", 1, "header"], ["id", "content", 1, "content"], ["id", "projectName", "type", "text", "placeholder", "Project Name", 3, "ngModel", "ngModelChange"], ["id", "addProject", 1, "submit", 3, "click"]], template: function AddProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddProjectComponent_Template_input_ngModelChange_4_listener($event) { return ctx.projectName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddProjectComponent_Template_div_click_5_listener() { return ctx.addProject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.projectName);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: [".container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  z-index: 1;\r\n}\r\n\r\n.header[_ngcontent-%COMP%] {\r\n  font-size: 48px;\r\n  color: #fff;\r\n  text-align: center;\r\n  background-color: #303435;\r\n  padding: 20px 75px;\r\n  border-top-left-radius: 20px;\r\n  border-top-right-radius: 20px;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  background-color: #494f51;\r\n  padding: 20px 75px;\r\n  border-bottom-left-radius: 20px;\r\n  border-bottom-right-radius: 20px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n  border-radius: 24px;\r\n  border-width: 0px;\r\n  padding: 10px 20px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n}\r\n\r\n.submit[_ngcontent-%COMP%] {\r\n  border-radius: 25px;\r\n  color: #c7c7c7;\r\n  background-color: #304969;\r\n  font-size: 24px;\r\n  padding: 10px;\r\n  margin: 10px 0px;\r\n  text-align: center;\r\n}\r\n\r\n.submit[_ngcontent-%COMP%]:hover {\r\n  background-color: #39567c;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wcm9qZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCIiwiZmlsZSI6ImFkZC1wcm9qZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogNDhweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzQzNTtcclxuICBwYWRkaW5nOiAyMHB4IDc1cHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTRmNTE7XHJcbiAgcGFkZGluZzogMjBweCA3NXB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICBib3JkZXItd2lkdGg6IDBweDtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uc3VibWl0IHtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGNvbG9yOiAjYzdjN2M3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDQ5Njk7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiAxMHB4IDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdWJtaXQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTU2N2M7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "YxCP":
/*!************************************************************************************************!*\
  !*** ./src/app/components/home/project-tree/class-item/project-item/project-item.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ProjectItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectItemComponent", function() { return ProjectItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/project.service */ "c3AT");



class ProjectItemComponent {
    constructor(projectService) {
        this.projectService = projectService;
        this.selectedProject = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.projectService.updateDetailsEmitter.subscribe((id) => {
            if (this.project != null && id == this.project._id) {
                this.projectService.getProjectById(id, (project) => {
                    this.project = project;
                });
            }
        });
    }
    ngOnInit() { }
    selectProject() {
        this.projectService.setSelectedProject(this.project._id);
    }
}
ProjectItemComponent.ɵfac = function ProjectItemComponent_Factory(t) { return new (t || ProjectItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"])); };
ProjectItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectItemComponent, selectors: [["app-project-item"]], inputs: { project: "project" }, outputs: { selectedProject: "selectedProject" }, decls: 2, vars: 1, consts: [[1, "container", 3, "click"]], template: function ProjectItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectItemComponent_Template_div_click_0_listener() { return ctx.selectProject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.project.details.name, "\n");
    } }, styles: [".container[_ngcontent-%COMP%] {\r\n  border-radius: 25px;\r\n  color: #c7c7c7;\r\n  background-color: #303435;\r\n  font-size: 24px;\r\n  padding: 10px;\r\n  margin: 10px 0px;\r\n  text-align: center;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]:hover {\r\n  background-color: #3b4041;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCIiwiZmlsZSI6InByb2plY3QtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBjb2xvcjogI2M3YzdjNztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzNDM1O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbjogMTBweCAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I0MDQxO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "Z91H":
/*!*********************************************************************************!*\
  !*** ./src/app/components/home/project-tree/class-item/class-item.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ClassItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassItemComponent", function() { return ClassItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_class_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/class.service */ "0soQ");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/project.service */ "c3AT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _project_item_project_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-item/project-item.component */ "YxCP");
/* harmony import */ var _add_project_add_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-project/add-project.component */ "XHxH");







function ClassItemComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-project-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("project", project_r3);
} }
function ClassItemComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ClassItemComponent_div_3_div_1_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClassItemComponent_div_3_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.addProject(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Add Project ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClassItemComponent_div_3_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.removeClass(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Remove Class ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.projects);
} }
function ClassItemComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-add-project", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function ClassItemComponent_div_4_Template_app_add_project_close_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.closeAddProject($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("classItem", ctx_r1.classItem);
} }
class ClassItemComponent {
    // We'll see if this is necessary after host listener on child component
    /*
    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent) {
      if (
        event.target != document.getElementById('addProjectButton')
      ) {
        this.showAddProjectComponent = false;
      }
    }
    */
    constructor(classService, projectService) {
        this.classService = classService;
        this.projectService = projectService;
        this.deletedClass = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selected = false;
        this.showAddProjectComponent = false;
        this.projectService.getProjectsEmitter.subscribe(() => {
            this.projectService.getProjects(this.classItem, (projects) => {
                this.projects = projects;
            });
        });
    }
    ngOnInit() {
        // Udpate class color
        // bind background color
        this.projectService.getProjects(this.classItem, (projects) => {
            this.projects = projects;
        });
    }
    changeView() {
        this.selected = !this.selected;
    }
    addProject() {
        this.showAddProjectComponent = true;
    }
    closeAddProject() {
        this.showAddProjectComponent = false;
    }
    removeClass() {
        this.classService.deleteClass(this.classItem, () => {
            this.deletedClass.emit(this.classItem);
        });
    }
}
ClassItemComponent.ɵfac = function ClassItemComponent_Factory(t) { return new (t || ClassItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_class_service__WEBPACK_IMPORTED_MODULE_1__["ClassService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"])); };
ClassItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClassItemComponent, selectors: [["app-class-item"]], inputs: { classItem: "classItem" }, outputs: { deletedClass: "deletedClass" }, decls: 5, vars: 5, consts: [[1, "container"], [1, "name", 3, "click"], ["class", "project-list", 4, "ngIf"], [4, "ngIf"], [1, "project-list"], [4, "ngFor", "ngForOf"], ["id", "addProjectButton", 1, "button", 3, "click"], ["id", "removeClassButton", 1, "button", "red", 3, "click"], [3, "project"], [3, "classItem", "close"]], template: function ClassItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClassItemComponent_Template_div_click_1_listener() { return ctx.changeView(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ClassItemComponent_div_3_Template, 6, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ClassItemComponent_div_4_Template, 2, 1, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.classItem.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAddProjectComponent);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _project_item_project_item_component__WEBPACK_IMPORTED_MODULE_4__["ProjectItemComponent"], _add_project_add_project_component__WEBPACK_IMPORTED_MODULE_5__["AddProjectComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n  margin: 20px;\r\n}\r\n\r\n.name[_ngcontent-%COMP%] {\r\n  font-size: 32px;\r\n  color: #c7c7c7;\r\n  padding: 10px;\r\n  text-align: center;\r\n  background-color: #303435;\r\n  border-radius: 30px;\r\n}\r\n\r\n.selected[_ngcontent-%COMP%] {\r\n  border-bottom-left-radius: 0px;\r\n  border-bottom-right-radius: 0px;\r\n  color: #fff;\r\n}\r\n\r\n.name[_ngcontent-%COMP%]:hover {\r\n  background-color: #3b4041;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n\r\n.project-list[_ngcontent-%COMP%] {\r\n  background-color: #5c6466;\r\n  color: #fff;\r\n  padding: 10px 20px;\r\n  border-bottom-left-radius: 30px;\r\n  border-bottom-right-radius: 30px;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  border-radius: 25px;\r\n  color: #c7c7c7;\r\n  background-color: #304969;\r\n  font-size: 24px;\r\n  padding: 10px;\r\n  margin: 10px 0px;\r\n  text-align: center;\r\n}\r\n\r\n.red[_ngcontent-%COMP%] {\r\n  background-color: rgb(134, 30, 30);\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:hover {\r\n  background-color: #39567c;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n\r\n.red[_ngcontent-%COMP%]:hover {\r\n  background-color: rgb(158, 40, 40);\r\n}\r\n\r\n.add-project-input[_ngcontent-%COMP%] {\r\n  border-radius: 25px;\r\n  color: #c7c7c7;\r\n  background-color: #304969;\r\n  font-size: 24px;\r\n  padding: 10px;\r\n  margin: 10px auto;\r\n  text-align: center;\r\n  justify-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJjbGFzcy1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbi5uYW1lIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgY29sb3I6ICNjN2M3Yzc7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzQzNTtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG59XHJcblxyXG4uc2VsZWN0ZWQge1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubmFtZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiNDA0MTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWxpc3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YzY0NjY7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDMwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDMwcHg7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgY29sb3I6ICNjN2M3Yzc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwNDk2OTtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDEwcHggMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnJlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzNCwgMzAsIDMwKTtcclxufVxyXG5cclxuLmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5NTY3YztcclxuICBjb2xvcjogI2ZmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5yZWQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTgsIDQwLCA0MCk7XHJcbn1cclxuXHJcbi5hZGQtcHJvamVjdC1pbnB1dCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBjb2xvcjogI2M3YzdjNztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA0OTY5O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_home_project_project_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/project/project.component */ "Ab0b");
/* harmony import */ var _components_home_project_tree_project_tree_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/project-tree/project-tree.component */ "hgw6");
/* harmony import */ var _components_home_project_tree_add_class_add_class_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/project-tree/add-class/add-class.component */ "ZRy8");
/* harmony import */ var _components_home_project_tree_class_item_class_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/project-tree/class-item/class-item.component */ "Z91H");
/* harmony import */ var _components_home_project_tree_class_item_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/project-tree/class-item/add-project/add-project.component */ "XHxH");
/* harmony import */ var _components_home_project_tree_class_item_project_item_project_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/project-tree/class-item/project-item/project-item.component */ "YxCP");
/* harmony import */ var _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/auth/auth.component */ "qrmE");
/* harmony import */ var _components_auth_callback_github_callback_github_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/auth/callback-github/callback-github.component */ "vKFB");
/* harmony import */ var _components_home_project_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/home/project/project-details/project-details.component */ "VLh8");
/* harmony import */ var _components_home_project_project_board_project_board_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/home/project/project-board/project-board.component */ "8dDo");
/* harmony import */ var _components_home_project_milestone_details_milestone_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/home/project/milestone-details/milestone-details.component */ "mGOu");
/* harmony import */ var _components_home_project_project_details_edit_project_details_edit_project_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/home/project/project-details/edit-project-details/edit-project-details.component */ "1WeW");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _components_home_project_project_timer_project_timer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/home/project/project-timer/project-timer.component */ "xovz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ "fXoL");






















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["NoopAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _components_home_project_project_component__WEBPACK_IMPORTED_MODULE_7__["ProjectComponent"],
        _components_home_project_tree_project_tree_component__WEBPACK_IMPORTED_MODULE_8__["ProjectTreeComponent"],
        _components_home_project_tree_add_class_add_class_component__WEBPACK_IMPORTED_MODULE_9__["AddClassComponent"],
        _components_home_project_tree_class_item_class_item_component__WEBPACK_IMPORTED_MODULE_10__["ClassItemComponent"],
        _components_home_project_tree_class_item_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_11__["AddProjectComponent"],
        _components_home_project_tree_class_item_project_item_project_item_component__WEBPACK_IMPORTED_MODULE_12__["ProjectItemComponent"],
        _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_13__["AuthComponent"],
        _components_auth_callback_github_callback_github_component__WEBPACK_IMPORTED_MODULE_14__["CallbackGithubComponent"],
        _components_home_project_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_15__["ProjectDetailsComponent"],
        _components_home_project_project_board_project_board_component__WEBPACK_IMPORTED_MODULE_16__["ProjectBoardComponent"],
        _components_home_project_milestone_details_milestone_details_component__WEBPACK_IMPORTED_MODULE_17__["MilestoneDetailsComponent"],
        _components_home_project_project_details_edit_project_details_edit_project_details_component__WEBPACK_IMPORTED_MODULE_18__["EditProjectDetailsComponent"],
        _components_home_project_project_timer_project_timer_component__WEBPACK_IMPORTED_MODULE_20__["ProjectTimerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["NoopAnimationsModule"]] }); })();


/***/ }),

/***/ "ZRy8":
/*!*******************************************************************************!*\
  !*** ./src/app/components/home/project-tree/add-class/add-class.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AddClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddClassComponent", function() { return AddClassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_class_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/class.service */ "0soQ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class AddClassComponent {
    constructor(classService) {
        this.classService = classService;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onDocumentClick(event) {
        if (
        // Gotta be a better way to optimize this
        event.target != document.getElementById('header')
            && event.target != document.getElementById('content')
            && event.target != document.getElementById('className')
            && event.target != document.getElementById('addClass')
            && event.target != document.getElementById('addClassButton')) {
            console.log(event.target);
            this.close.emit("close me");
        }
    }
    ngOnInit() {
        // Focus on input
    }
    addClass() {
        this.classService.addClass(this.className, () => {
            this.close.emit("close me");
        });
    }
}
AddClassComponent.ɵfac = function AddClassComponent_Factory(t) { return new (t || AddClassComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_class_service__WEBPACK_IMPORTED_MODULE_1__["ClassService"])); };
AddClassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddClassComponent, selectors: [["app-add-class"]], hostBindings: function AddClassComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddClassComponent_click_HostBindingHandler($event) { return ctx.onDocumentClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, inputs: { className: "className" }, outputs: { close: "close" }, decls: 7, vars: 1, consts: [[1, "container"], ["id", "header", 1, "header"], ["id", "content", 1, "content"], ["id", "className", "type", "text", "placeholder", "Class Name", 3, "ngModel", "ngModelChange"], ["id", "addClass", 1, "submit", 3, "click"]], template: function AddClassComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddClassComponent_Template_input_ngModelChange_4_listener($event) { return ctx.className = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddClassComponent_Template_div_click_5_listener() { return ctx.addClass(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.className);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: [".container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  z-index: 1;\r\n  border: 1px solid #777;\r\n  border-radius: 20px;\r\n}\r\n\r\n.header[_ngcontent-%COMP%] {\r\n  font-size: 48px;\r\n  color: #fff;\r\n  text-align: center;\r\n  background-color: #303435;\r\n  padding: 20px 75px;\r\n  border-top-left-radius: 20px;\r\n  border-top-right-radius: 20px;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  background-color: #494f51;\r\n  padding: 20px 75px;\r\n  border-bottom-left-radius: 20px;\r\n  border-bottom-right-radius: 20px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n  border-radius: 24px;\r\n  border-width: 0px;\r\n  padding: 10px 20px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n}\r\n\r\n.submit[_ngcontent-%COMP%] {\r\n  border-radius: 25px;\r\n  color: #c7c7c7;\r\n  background-color: #304969;\r\n  font-size: 24px;\r\n  padding: 10px;\r\n  margin: 10px 0px;\r\n  text-align: center;\r\n}\r\n\r\n.submit[_ngcontent-%COMP%]:hover {\r\n  background-color: #39567c;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jbGFzcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCIiwiZmlsZSI6ImFkZC1jbGFzcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3Nzc7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgZm9udC1zaXplOiA0OHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzNDM1O1xyXG4gIHBhZGRpbmc6IDIwcHggNzVweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NGY1MTtcclxuICBwYWRkaW5nOiAyMHB4IDc1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gIGJvcmRlci13aWR0aDogMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5zdWJtaXQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgY29sb3I6ICNjN2M3Yzc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwNDk2OTtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDEwcHggMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnN1Ym1pdDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5NTY3YztcclxuICBjb2xvcjogI2ZmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "c3AT":
/*!*********************************************!*\
  !*** ./src/app/services/project.service.ts ***!
  \*********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ProjectService {
    constructor(http) {
        this.http = http;
        // Needs renaming to more intuitive names
        this.projects = [];
        this.project = this.projects[0];
        this.getProjectEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.getProjectsEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.updateDetailsEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    setSelectedProject(id) {
        this.project = this.projects.find((project) => project._id == id);
        this.getProjectEmitter.emit("User selected different project");
    }
    getSelectedProject() {
        return this.project;
    }
    saveProjectDetails(_id, details, cb) {
        this.http.put('/api/v1/project/details', {
            _id: _id,
            details: details
        }).subscribe((msg) => {
            this.updateDetailsEmitter.emit(_id);
            cb("saved");
        });
    }
    addProject(classItem, projectName, cb) {
        this.http.post(`/api/v1/project`, { id: classItem._id, projectName: projectName })
            .subscribe((project) => {
            // push project into projects list
            this.projects.push(project);
            this.setSelectedProject(project._id);
            cb(project);
        });
    }
    getProjects(classItem, cb) {
        this.http.get(`/api/v1/projects/${classItem._id}`)
            .subscribe((projects) => {
            this.projects = projects;
            cb(projects);
        });
    }
    getProjectById(id, cb) {
        this.http.get(`/api/v1/project/${id}`)
            .subscribe((project) => {
            cb(project);
        });
    }
    deleteProject(project, cb) {
        if (confirm(`Are you sure you want to delete ${project.details.name}?`)) {
            this.http
                .request('delete', '/api/v1/project', { body: project })
                .subscribe((deletedProject) => {
                this.projects = this.projects.filter(p => p != project);
                this.getProjectsEmitter.emit("get the projects");
                this.project = this.projects[0];
                if (!this.project) {
                    this.project = null;
                    this.getProjectEmitter.emit("get null project");
                    cb();
                    return;
                }
                this.setSelectedProject(this.project._id);
                cb();
            });
        }
    }
}
ProjectService.ɵfac = function ProjectService_Factory(t) { return new (t || ProjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ProjectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProjectService, factory: ProjectService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "eS/N":
/*!***********************************************!*\
  !*** ./src/app/services/milestone.service.ts ***!
  \***********************************************/
/*! exports provided: MilestoneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MilestoneService", function() { return MilestoneService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MilestoneService {
    constructor() {
        this.getMilestone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    setSelectedMilestone(milestone) {
        this.milestone = milestone;
        this.getMilestone.emit("User selected different milestone");
    }
    getSelectedMilestone(cb) {
        cb(this.milestone);
    }
    saveMilestone(cb) {
        cb("saved");
    }
}
MilestoneService.ɵfac = function MilestoneService_Factory(t) { return new (t || MilestoneService)(); };
MilestoneService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MilestoneService, factory: MilestoneService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "hgw6":
/*!************************************************************************!*\
  !*** ./src/app/components/home/project-tree/project-tree.component.ts ***!
  \************************************************************************/
/*! exports provided: ProjectTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectTreeComponent", function() { return ProjectTreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_class_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/class.service */ "0soQ");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _class_item_class_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./class-item/class-item.component */ "Z91H");
/* harmony import */ var _add_class_add_class_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-class/add-class.component */ "ZRy8");






function ProjectTreeComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-class-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deletedClass", function ProjectTreeComponent_div_6_Template_app_class_item_deletedClass_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.removeClass($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const class_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("classItem", class_r2);
} }
function ProjectTreeComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-add-class", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function ProjectTreeComponent_div_9_Template_app_add_class_close_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r5.showAddClassComponent = false; return ctx_r5.getClasses(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProjectTreeComponent {
    constructor(classService, authService) {
        this.classService = classService;
        this.authService = authService;
        this.classes = [];
        this.showAddClassComponent = false;
    }
    ngOnInit() {
        this.classService.getClasses((classes) => {
            this.classes = classes;
        });
    }
    logoutGithub() {
        this.authService.logoutGithub();
    }
    getClasses() {
        this.classService.getClasses((classes) => {
            this.classes = classes;
        });
    }
    removeClass(classItem) {
        this.classes = this.classes.filter(c => c != classItem);
    }
}
ProjectTreeComponent.ɵfac = function ProjectTreeComponent_Factory(t) { return new (t || ProjectTreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_class_service__WEBPACK_IMPORTED_MODULE_1__["ClassService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
ProjectTreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectTreeComponent, selectors: [["app-project-tree"]], decls: 10, vars: 2, consts: [[1, "container"], [1, "button", 3, "click"], [1, "title"], [1, "list"], ["class", "list-item", 4, "ngFor", "ngForOf"], ["id", "addClassButton", 1, "button", 3, "click"], [4, "ngIf"], [1, "list-item"], [3, "classItem", "deletedClass"], [3, "close"]], template: function ProjectTreeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectTreeComponent_Template_div_click_1_listener() { return ctx.logoutGithub(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Project Tree");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProjectTreeComponent_div_6_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectTreeComponent_Template_div_click_7_listener() { return ctx.showAddClassComponent = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Add Class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProjectTreeComponent_div_9_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.classes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAddClassComponent);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _class_item_class_item_component__WEBPACK_IMPORTED_MODULE_4__["ClassItemComponent"], _add_class_add_class_component__WEBPACK_IMPORTED_MODULE_5__["AddClassComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n  font-family: sans-serif;\r\n  height: 100%;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  font-size: 48px;\r\n  text-align: center;\r\n  padding: 20px 10px;\r\n  color: #fff;\r\n  background-color: #303435;\r\n  border-top-left-radius: 20px;\r\n  border-top-right-radius: 20px;\r\n}\r\n\r\n.list[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n  padding: 20px;\r\n  background-color: #494f51;\r\n  border-bottom-left-radius: 20px;\r\n  border-bottom-right-radius: 20px;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  border-radius: 30px;\r\n  color: #c7c7c7;\r\n  background-color: #304969;\r\n  font-size: 32px;\r\n  padding: 10px;\r\n  margin: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:hover {\r\n  background-color: #39567c;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtdHJlZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGVBQWU7QUFDakIiLCJmaWxlIjoicHJvamVjdC10cmVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiA0OHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzQzNTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NGY1MTtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGNvbG9yOiAjYzdjN2M3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDQ5Njk7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5NTY3YztcclxuICBjb2xvcjogI2ZmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class AuthService {
    constructor(router, http, document) {
        this.router = router;
        this.http = http;
        this.document = document;
    }
    loginWithGithub() {
        // Navigate to github authorization page
        // Pull client id from server
        let githubClientId = 'd0a4be1267ced10edef1';
        this.document.location.href = `https://github.com/login/oauth/authorize?client_id=${githubClientId}`;
    }
    setGithubCode(code) {
        // This is triggered by the initialization of the github/callback component
        // On response the user is sent to home
        this.http
            .post(`/api/v1/auth/github/callback`, { code: code })
            .subscribe((res) => {
            if (res.err) {
                this.router.navigateByUrl('/auth');
            }
            else {
                this.router.navigateByUrl('/home');
            }
        });
    }
    logoutGithub() {
        this.http
            .post('/api/v1/auth/github/logout', '')
            .subscribe((res) => {
            this.router.navigateByUrl('/auth');
        });
    }
    validateUser() {
        this.http.get('/api/v1/auth/github/validate').subscribe((res) => {
            if (res.err) {
                this.logoutGithub();
            }
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "mGOu":
/*!******************************************************************************************!*\
  !*** ./src/app/components/home/project/milestone-details/milestone-details.component.ts ***!
  \******************************************************************************************/
/*! exports provided: MilestoneDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MilestoneDetailsComponent", function() { return MilestoneDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_milestone_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/milestone.service */ "eS/N");


class MilestoneDetailsComponent {
    constructor(milestoneService) {
        this.milestoneService = milestoneService;
        this.milestone = { name: 'Test' };
        this.milestoneService.getMilestone.subscribe(() => {
            this.getMilestone();
        });
    }
    ngOnInit() {
    }
    getMilestone() {
        this.milestoneService.getSelectedMilestone((milestone) => {
            this.milestone = milestone;
        });
    }
}
MilestoneDetailsComponent.ɵfac = function MilestoneDetailsComponent_Factory(t) { return new (t || MilestoneDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_milestone_service__WEBPACK_IMPORTED_MODULE_1__["MilestoneService"])); };
MilestoneDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MilestoneDetailsComponent, selectors: [["app-milestone-details"]], decls: 6, vars: 1, consts: [[1, "container"], [1, "header"], [1, "body"]], template: function MilestoneDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Milestone Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.milestone.name, " ");
    } }, styles: [".header[_ngcontent-%COMP%] {\r\n  font-size: 32px;\r\n  color: #fff;\r\n  padding: 20px;\r\n  background-color: #303435;\r\n  border-top-left-radius: 38px;\r\n  border-top-right-radius: 38px;\r\n}\r\n\r\n.body[_ngcontent-%COMP%] {\r\n  background-color: #5c6466;\r\n  color: #fff;\r\n  padding: 20px;\r\n  border-bottom-left-radius: 38px;\r\n  border-bottom-right-radius: 38px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbGVzdG9uZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsYUFBYTtFQUNiLCtCQUErQjtFQUMvQixnQ0FBZ0M7QUFDbEMiLCJmaWxlIjoibWlsZXN0b25lLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDM0MzU7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzhweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzhweDtcclxufVxyXG5cclxuLmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YzY0NjY7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzOHB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzOHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "q+Sf":
/*!******************************************!*\
  !*** ./src/app/services/time.service.ts ***!
  \******************************************/
/*! exports provided: TimeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeService", function() { return TimeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TimeService {
    constructor() { }
    calculateHours(time) {
        return Math.floor(time / 3600000);
    }
    calculateMinutes(time) {
        let hours = this.calculateHours(time);
        time = time - hours * 3600000;
        return Math.floor(time / 60000);
    }
    calculateSeconds(time) {
        let hours = this.calculateHours(time);
        let minutes = this.calculateMinutes(time);
        time = time - hours * 3600000 - minutes * 60000;
        return Math.floor(time / 1000);
    }
    formatUnderTen(time) {
        let formattedTime;
        time < 10
            ? (formattedTime = '0' + time.toString())
            : (formattedTime = time.toString());
        return formattedTime;
    }
    formatTime(time) {
        let hours = this.formatUnderTen(this.calculateHours(time));
        let minutes = this.formatUnderTen(this.calculateMinutes(time));
        let seconds = this.formatUnderTen(this.calculateSeconds(time));
        return `${hours}:${minutes}:${seconds}`;
    }
}
TimeService.ɵfac = function TimeService_Factory(t) { return new (t || TimeService)(); };
TimeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TimeService, factory: TimeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "qrmE":
/*!***************************************************!*\
  !*** ./src/app/components/auth/auth.component.ts ***!
  \***************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");


class AuthComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
    loginWithGithub() {
        this.authService.loginWithGithub();
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 6, vars: 0, consts: [[1, "container"], [1, "header"], [1, "content"], [1, "button", 3, "click"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Authorization");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthComponent_Template_div_click_4_listener() { return ctx.loginWithGithub(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Login with Github ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  z-index: 1;\r\n}\r\n\r\n.header[_ngcontent-%COMP%] {\r\n  font-size: 48px;\r\n  color: #fff;\r\n  text-align: center;\r\n  background-color: #303435;\r\n  padding: 20px 75px;\r\n  border-top-left-radius: 20px;\r\n  border-top-right-radius: 20px;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  background-color: #494f51;\r\n  padding: 20px 75px;\r\n  border-bottom-left-radius: 20px;\r\n  border-bottom-right-radius: 20px;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  border-radius: 25px;\r\n  color: #c7c7c7;\r\n  background-color: #6e5494;\r\n  font-size: 24px;\r\n  padding: 10px;\r\n  margin: 10px 0px;\r\n  text-align: center;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:hover {\r\n  background-color: #5a4579;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGVBQWU7QUFDakIiLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBmb250LXNpemU6IDQ4cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDM0MzU7XHJcbiAgcGFkZGluZzogMjBweCA3NXB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk0ZjUxO1xyXG4gIHBhZGRpbmc6IDIwcHggNzVweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGNvbG9yOiAjYzdjN2M3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZTU0OTQ7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiAxMHB4IDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YTQ1Nzk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "vKFB":
/*!******************************************************************************!*\
  !*** ./src/app/components/auth/callback-github/callback-github.component.ts ***!
  \******************************************************************************/
/*! exports provided: CallbackGithubComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbackGithubComponent", function() { return CallbackGithubComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");



class CallbackGithubComponent {
    constructor(route, authService) {
        this.route = route;
        this.authService = authService;
        this.route.queryParams.subscribe((params) => {
            this.code = params['code'];
        });
    }
    ngOnInit() {
        this.authService.setGithubCode(this.code);
    }
}
CallbackGithubComponent.ɵfac = function CallbackGithubComponent_Factory(t) { return new (t || CallbackGithubComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
CallbackGithubComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CallbackGithubComponent, selectors: [["app-callback-github"]], decls: 2, vars: 0, template: function CallbackGithubComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Authenticating...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["div[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  transform: translate(50%, 50%);\r\n  background-color: #303435;\r\n  color: #fff;\r\n  font-size: 24px;\r\n  padding: 20px;\r\n  border-radius: 50px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGxiYWNrLWdpdGh1Yi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5Qix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImNhbGxiYWNrLWdpdGh1Yi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDM0MzU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/home/home.component */ "BuFo");
/* harmony import */ var src_app_components_auth_auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/auth/auth.component */ "qrmE");
/* harmony import */ var src_app_components_auth_callback_github_callback_github_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/auth/callback-github/callback-github.component */ "vKFB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    {
        path: 'home',
        component: src_app_components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
    },
    {
        path: 'auth',
        component: src_app_components_auth_auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"],
    },
    /*
    Putting this functionality in HomeComponent ngOnInit()
    Check that should do individual routes for each service I auth with
    */
    {
        path: 'auth/callback/github',
        component: src_app_components_auth_callback_github_callback_github_component__WEBPACK_IMPORTED_MODULE_3__["CallbackGithubComponent"],
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xovz":
/*!**********************************************************************************!*\
  !*** ./src/app/components/home/project/project-timer/project-timer.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProjectTimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectTimerComponent", function() { return ProjectTimerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_timer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/timer.service */ "8hpD");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/project.service */ "c3AT");
/* harmony import */ var src_app_services_time_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/time.service */ "q+Sf");




class ProjectTimerComponent {
    constructor(timerService, projectService, timeService) {
        this.timerService = timerService;
        this.projectService = projectService;
        this.timeService = timeService;
        this.startStop = 'Start';
        this.pauseResume = 'Pause';
        this.previousSession = 0;
        this.currentSession = 0;
    }
    ngOnInit() {
        this.project = this.projectService.getSelectedProject();
        this.runTimer();
    }
    changeStartStop() {
        if (this.startStop == 'Start') {
            this.timerService.createSession((session) => {
                this.session = session;
                this.startStop = 'Stop';
            });
        }
        else {
            this.session.end = new Date();
            this.timerService.endSession(this.session, (t) => {
                this.previousSession = t;
                this.startStop = 'Start';
                this.pauseResume = 'Pause';
                this.resetCurrentSession();
            });
        }
    }
    changePauseResume() {
        if (this.pauseResume == 'Pause' && this.startStop == 'Stop') {
            this.session.pauseStart = new Date();
            this.timerService.pauseStart(this.session, () => {
                this.pauseResume = 'Resume';
            });
            // Change state to BE
        }
        else if (this.pauseResume == 'Resume' && this.startStop == 'Stop') {
            this.session.pauseEnd = new Date();
            this.timerService.pauseEnd(this.session, (t) => {
                this.session.totalPauseTime = t;
                this.pauseResume = 'Pause';
            });
        }
    }
    runTimer() {
        if (this.startStop == 'Stop' && this.pauseResume == 'Pause') {
            this.currentSession += 1000;
        }
        setTimeout(() => {
            this.runTimer();
        }, 1000);
    }
    resetCurrentSession() {
        this.currentSession = 0;
    }
}
ProjectTimerComponent.ɵfac = function ProjectTimerComponent_Factory(t) { return new (t || ProjectTimerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_timer_service__WEBPACK_IMPORTED_MODULE_1__["TimerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_time_service__WEBPACK_IMPORTED_MODULE_3__["TimeService"])); };
ProjectTimerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectTimerComponent, selectors: [["app-project-timer"]], inputs: { project: "project" }, decls: 13, vars: 8, consts: [[1, "container"], [1, "header", "selected"], [1, "body"], [1, "currentSession"], [1, "container-buttons"], [1, "button-small", "green-button", "startStop", 3, "click"], [1, "button-small", "blue-button", "pauseResume", 3, "click"]], template: function ProjectTimerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Timer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectTimerComponent_Template_div_click_9_listener() { return ctx.changeStartStop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectTimerComponent_Template_div_click_11_listener() { return ctx.changePauseResume(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Previous Session: ", ctx.timeService.formatTime(ctx.previousSession), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.timeService.formatTime(ctx.currentSession), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("startStop", ctx.startStop == "Stop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.startStop, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("pauseResume", ctx.pauseResume == "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.pauseResume, " ");
    } }, styles: [".green-button[_ngcontent-%COMP%]:hover {\r\n  background-color: var(--green-button-hover);\r\n}\r\n\r\n.blue-button[_ngcontent-%COMP%]:hover {\r\n  background-color: var(--blue-button-hover);\r\n}\r\n\r\n.startStop[_ngcontent-%COMP%] {\r\n  background-color: var(--red-button);\r\n}\r\n\r\n.startStop[_ngcontent-%COMP%]:hover {\r\n  background-color: var(--red-button-hover);\r\n}\r\n\r\n.pauseResume[_ngcontent-%COMP%] {\r\n  background-color: var(--green-button);\r\n}\r\n\r\n.pauseResume[_ngcontent-%COMP%]:hover {\r\n  background-color: var(--green-button-hover);\r\n}\r\n\r\n.container-buttons[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  padding: 10px 30%;\r\n}\r\n\r\n.currentSession[_ngcontent-%COMP%] {\r\n  font-size: 36px;\r\n  margin: auto;\r\n  width: 50%;\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtdGltZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7QUFDcEIiLCJmaWxlIjoicHJvamVjdC10aW1lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyZWVuLWJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tYnV0dG9uLWhvdmVyKTtcclxufVxyXG5cclxuLmJsdWUtYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWJ1dHRvbi1ob3Zlcik7XHJcbn1cclxuXHJcbi5zdGFydFN0b3Age1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1idXR0b24pO1xyXG59XHJcblxyXG4uc3RhcnRTdG9wOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtYnV0dG9uLWhvdmVyKTtcclxufVxyXG5cclxuLnBhdXNlUmVzdW1lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi1idXR0b24pO1xyXG59XHJcblxyXG4ucGF1c2VSZXN1bWU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLWJ1dHRvbi1ob3Zlcik7XHJcbn1cclxuXHJcbi5jb250YWluZXItYnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAxMHB4IDMwJTtcclxufVxyXG5cclxuLmN1cnJlbnRTZXNzaW9uIHtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map