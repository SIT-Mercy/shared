export var StudentError;
(function (StudentError) {
    StudentError["notFound"] = "notFound";
    StudentError["invalidQuery"] = "invalidQuery";
    StudentError["alreadyExists"] = "alreadyExists";
    StudentError["invalidInfo"] = "invalidInfo";
})(StudentError || (StudentError = {}));
export var StaffError;
(function (StaffError) {
    StaffError["noPermission"] = "noPermission";
    StaffError["notFound"] = "notFound";
    StaffError["invalidInfo"] = "invalidInfo";
    StaffError["alreadyExists"] = "alreadyExists";
    StaffError["invalidQuery"] = "invalidQuery";
})(StaffError || (StaffError = {}));
export var ItemError;
(function (ItemError) {
    ItemError["invalidInfo"] = "invalidInfo";
    ItemError["notFound"] = "notFound";
    ItemError["invalidQuery"] = "invalidQuery";
})(ItemError || (ItemError = {}));
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