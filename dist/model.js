export var StudentError;
(function (StudentError) {
    StudentError["studentNotFound"] = "studentNotFound";
    StudentError["invalidStudentQuery"] = "invalidStudentQuery";
    StudentError["alreadyExists"] = "alreadyExists";
    StudentError["invalidStudentInfo"] = "invalidStudentInfo";
})(StudentError || (StudentError = {}));
export var StaffError;
(function (StaffError) {
    StaffError["noPermission"] = "noPermission";
    StaffError["staffNotFound"] = "staffNotFound";
    StaffError["invalidStaffInfo"] = "invalidStaffInfo";
    StaffError["alreadyExists"] = "alreadyExists";
    StaffError["invalidStaffQuery"] = "invalidStaffQuery";
})(StaffError || (StaffError = {}));
export var PoorLevel;
(function (PoorLevel) {
    PoorLevel[PoorLevel["notPoor"] = 0] = "notPoor";
    PoorLevel[PoorLevel["poor"] = 1] = "poor";
    PoorLevel[PoorLevel["veryPoor"] = 2] = "veryPoor";
})(PoorLevel || (PoorLevel = {}));
var PointChangeReason;
(function (PointChangeReason) {
    PointChangeReason["redeem"] = "redeem";
    PointChangeReason["rental"] = "rental";
    PointChangeReason["yearlyCost"] = "yearlyCost";
    PointChangeReason["volunteer"] = "volunterer";
})(PointChangeReason || (PointChangeReason = {}));
var ItemAmountChangeReason;
(function (ItemAmountChangeReason) {
    ItemAmountChangeReason["redeemed"] = "redeemed";
    ItemAmountChangeReason["rented"] = "rented";
    ItemAmountChangeReason["missing"] = "missing";
    ItemAmountChangeReason["ownUse"] = "ownUse";
})(ItemAmountChangeReason || (ItemAmountChangeReason = {}));
//# sourceMappingURL=model.js.map