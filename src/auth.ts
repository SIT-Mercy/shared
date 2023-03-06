export enum AuthError {
  missingHeader = "missingAuthHeader",
  invalidJwt = "invalidJwt",
  expiredJwt = "expiredJwt",
  wrongStudentIdOrPassword = "wrongStudentIdOrPassword",
  staffNotFound = "staffNotFound",
  noPermission = "noPermission",
}

export enum StaffPermission {
  /**
   * To add, remove and update a staff.
   * Staff can natually alter themselves.
   */
  alterStaffs = "alterStaffs",
  /**
   * To create and submit a transaction and a rental. 
   */
  submitTransaction = "submitTransaction",
  /**
   * To directly change one's point.
   */
  alterPoint = "alterPoint",
  /**
   * To update the info of students, such as name.
   */
  alterStudentInfo = "alterStudentInfo",
  /**
   * To update the detail of students, such as phone number. 
   */
  alterStudentDetail = "alterStudentDetail",
}