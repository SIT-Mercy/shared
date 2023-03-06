export var AuthError;
(function (AuthError) {
    AuthError["missingHeader"] = "missingAuthHeader";
    AuthError["invalidJwt"] = "invalidJwt";
    AuthError["wrongStudentIdOrPassword"] = "wrongStudentIdOrPassword";
    AuthError["staffNotFound"] = "staffNotFound";
})(AuthError || (AuthError = {}));
export var StaffPermission;
(function (StaffPermission) {
    StaffPermission["alterStaffs"] = "alterStaffs";
    StaffPermission["submitTransaction"] = "submitTransaction";
    StaffPermission["alterPoint"] = "alterPoint";
    StaffPermission["alterStudentInfo"] = "alterStudentInfo";
    StaffPermission["alterStudentDetail"] = "alterStudentDetail";
})(StaffPermission || (StaffPermission = {}));
//# sourceMappingURL=auth.js.map