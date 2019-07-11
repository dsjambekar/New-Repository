export class UserModel {
  _id: string;
  id: string;
  email: string;
  name: string;
  givenName: string;
  familyName: string;
  image: string;
  locale: string;
  token?: string;
  idToken?: string;
}
