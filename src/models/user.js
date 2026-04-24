import mongoose from 'mongoose';
import { model } from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username : {type : String, trim :true, required : true, maxLength: 32},
    email :{ type : String, trim:true, required : true},
    password: { type: String, minlength: 8, maxLength : 128, required: true },
    avatar: { type: String, required: false,   default: '../public/avatar.png'  },
  },
    {
      timestamps : true,
    },
);

// userSchema.methods.toJSON = function () {
//   const obj = this.toObject();
//   delete obj.password;
//   return obj;
// };

export const User = model('User', userSchema);
