import { Client, Databases, ID,Account } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66503c3e00071a2990b0");

const databases = new Databases(client);
const account = new Account(client);
export  {databases,account}
