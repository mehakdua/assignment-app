import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortItems'
})
export class SortItemsPipe implements PipeTransform {

  transform(value: any,fieldName:string,index:number,originalArr:any): any {
    if((index%3) === 1){
      return value.sort ( (left:any, right:any) => {
        if (left[fieldName] < right[fieldName])
          return -1;

        return 1
      })
    }
   
  if((index%3) === 2){
    return value.sort ( (left:any, right:any) => {
      if (left[fieldName] > right[fieldName])
        return -1;

      return 1
    })
  }
  if((index%3) === 0){
      return originalArr;
  }
 
}

}
