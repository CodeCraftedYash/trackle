export type UpdateDataType = {
  _id:string;
  password:string;
  gender: "male" | "female" | "others" |"";
  mobileNumber:string;
  standard:string;
  fees:string;
  isFeesPaid?:'yes' | 'no' | '';
  picture:null|File;
}