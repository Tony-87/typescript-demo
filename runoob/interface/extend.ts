interface ILoan {
  interest: number
  print: () => {}
}

class AgriLoan implements ILoan {
  interest: number
  rebate: number

  constructor(interest: number, rebate: number) {
    this.interest = interest
    this.rebate = rebate
  }
  print(): number {
    return 12
  }
}

//  var obj = new AgriLoan(10,1)
//  console.log("利润为 : "+obj.interest+"，抽成为 : "+obj.rebate )
