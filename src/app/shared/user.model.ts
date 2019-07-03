export class UserModel {
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
