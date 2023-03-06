export var AuthError;
(function (AuthError) {
    AuthError["missingHeader"] = "missingAuthHeader";
    AuthError["invalidJwt"] = "invalidJwt";
    AuthError["wrongStudentIdOrPassword"] = "wrongStudentIdOrPassword";
    AuthError["staffNotFound"] = "staffNotFound";
})(AuthError || (AuthError = {}));
//# sourceMappingURL=auth.js.map