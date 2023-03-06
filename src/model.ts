import type { ObjectId, Int32, Double } from "mongodb"
import { StaffPermission } from "./auth.js"

export type Amount = Int32
export type Point = Int32

export enum StudentError {
  noPermission = "noPermission",
  noSuchStudent = "noSuchStudent",
  studentIdNotGiven = "studentIdNotGiven",
}

export enum PoorLevel {
  notPoor = 0,
  poor = 1,
  veryPoor = 2,
}

export interface Student {
  _id: ObjectId
  studentID: string
  name: string
  college: string
  poorLv: PoorLevel
  point: Point
  creationTime: Date
  /**
   * Null when the student not yet to provide it.
   */
  phone: string | null
}

export interface Staff {
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
  creationTime: Date
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
  beforeChange: Point
  afterChange: Point
  reason: PointChangeReason | null
  creationTime: Date
}

export interface TranscationRecord {
  _id: ObjectId
  customer_id: ObjectId
  operator_id: ObjectId
  item_id: ObjectId
  amount: Int32
  unitPrice: Point
  priceFactor: Double
  finalTotalPrice: Point
  notes: string | null
  creationTime: Date
}

export interface Item {
  _id: ObjectId
  name: string
  description: string
  price: Point | null
  rent: Point | null
  poorPriceFactor: Double
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
  beforeChange: Amount
  afterChange: Amount
  creationTime: Date
}

export interface DonationRecord {
  _id: ObjectId
  donator_id: ObjectId
  operator_id: ObjectId
  note: string
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
  creationTime: Date
  returnTime: Date | null
}
