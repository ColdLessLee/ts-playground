type MyPick<T, K extends keyof T> = {
    [W in K ] : T[W]
}

// 1. 使用js的思想去还原ts类型系统中的实现
// function myPick(valued:any,keyed:Array<any>) {
//     let obj = {
//         title: '',
//         extract:''
//     }
//     keyed.forEach(key => {
//         if (obj[key]) { 
//             obj[key] = valued[key]
//         }
//      })
//     return obj
//  }
