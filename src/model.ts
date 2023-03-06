import type { ObjectId } from "mongodb"
import { StaffPermission } from "./auth.js"

export type Int = number
export type Double = number
export type Amount = Int | number
export type Point = Int | number

export enum StudentError {
  notFound = "studentNotFound",
  invalidQuery = "invalidStudentQuery",
  alreadyExists = "alreadyExists",
  invalidInfo = "invalidStudentInfo",
}

export enum StaffError {
  noPermission = "noPermission",
  notFound = "staffNotFound",
  invalidInfo = "invalidStaffInfo",
  alreadyExists = "alreadyExists",
  invalidQuery = "invalidStaffQuery"
}

export enum PoorLevel {
  notPoor = 0,
  poor = 1,
  veryPoor = 2,
}

export interface Student {
  _id: ObjectId
  /**
   * Immutable
   */
  studentId: string
  name: string
  college: string
  poorLv: PoorLevel
  point: Point
  /**
   * Immutable
   */
  creationTime: Date
  /**
   * Null when the student not yet to provide it.
   */
  phone: string | null
  /**
   * To keep concurrency
   */
  version: Int | number
}

export interface Staff {
  /**
   * Immutable
   */
  studentId: string
  _id: ObjectId
  /**
   * Just check the equality, becasue the password could be encrypted.
   */
  password: string
  /**
   * The key in student list.
   * Since every operator is also a student in database.
   */
  student_id: ObjectId
  permissions: StaffPermission[]
  /**
   * Immutable
   */
  creationTime: Date
  /**
   * To keep concurrency
   */
  version: Int | number
  /**
   * Whether the staff is employed.
   */
  active: boolean
}

enum PointChangeReason {
  redeem = "redeem",
  rental = "rental",
  yearlyCost = "yearlyCost",
  volunteer = "volunterer"
}

export interface PointChangeRecord {
  _id: ObjectId
  subject_id: ObjectId
  operator_id: ObjectId
  beforeChange: Point | number
  afterChange: Point | number
  reason: PointChangeReason | null
  /**
   * Immutable
   */
  creationTime: Date
}

export interface TranscationRecord {
  _id: ObjectId
  customer_id: ObjectId
  operator_id: ObjectId
  item_id: ObjectId
  amount: Amount | number
  unitPrice: Point | number
  priceFactor: Double | number
  finalTotalPrice: Point | number
  notes: string | null
  /**
   * Immutable
   */
  creationTime: Date
}

export interface Item {
  _id: ObjectId
  name: string
  description: string
  price: Point | null
  rent: Point | null
  poorPriceFactor: Double | number
  /**
   * Immutable
   */
  creationTime: Date
}

enum ItemAmountChangeReason {
  redeemed = "redeemed",
  rented = "rented",
  missing = "missing",
  ownUse = "ownUse",
}

export interface ItemAmountChangeRecord {
  _id: ObjectId
  name: string
  item_id: ObjectId
  related_id: ObjectId | null
  reason: ItemAmountChangeReason | null
  beforeChange: Amount | number
  afterChange: Amount | number
  /**
   * Immutable
   */
  creationTime: Date
}

export interface DonationRecord {
  _id: ObjectId
  donator_id: ObjectId
  operator_id: ObjectId
  note: string
  /**
   * Immutable
   */
  creationTime: Date
}

interface RenewalRecord {
  from: Date
  to: Date
}

export interface RentalRecord {
  _id: ObjectId
  borrowerKey: ObjectId
  operatorKey: ObjectId
  itemKey: ObjectId
  name: string
  phoneNumber: string
  deadline: Date
  renewalRecords: RenewalRecord[]
  returnTime: Date | null
  /**
   * Immutable
   */
  creationTime: Date
  /**
   * To keep concurrency
   */
  version: Int | number
}
