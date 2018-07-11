export class UserExpress {
   static Firstname(control)
   {
    // tslint:disable-next-line:prefer-const
    let regx = /^[a-zA-Z\-]+$/;
    const valid = regx.test(control.value);
    return valid ? null : {Firstname: true};
   }
   static Lastname(control)
   {
    // tslint:disable-next-line:prefer-const
    let regx = /^[a-zA-Z\-]+$/;
    const valid = regx.test(control.value);
    return valid ? null : {Lastname: true};
   }
  static Password(control)
  {
     // tslint:disable-next-line:prefer-const
     let regx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
     const valid = regx.test(control.value);
     return valid ? null : {Password: true};
  }

  static EmailID(control)
  {
     // tslint:disable-next-line:max-line-length
     const regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     const valid = regx.test(control.value);
     return valid ? null : {EmailID: true};
  }

static Address(control)
   {
    // tslint:disable-next-line:prefer-const
    let regx = /^[a-zA-Z\-]+$/;
    const valid = regx.test(control.value);
    return valid ? null : {Address: true};
   }

   static phonenum(control)
   {
    // tslint:disable-next-line:prefer-const
    let regx = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    const valid = regx.test(control.value);
    return valid ? null : {phonenum: true};
   }

   static UserName(control)
   {
    // tslint:disable-next-line:prefer-const
    let regx = /^[a-zA-Z\-]+$/;
    const valid = regx.test(control.value);
    return valid ? null : {UserName: true};
   }
}

