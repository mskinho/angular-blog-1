import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'parentFilter'
})
export class ParentFilterPipe implements PipeTransform {
    transform(items: Array<any>, parent_id: string): Array<any> {
        return items.filter(item => item.parent_id === parent_id);
    }
}
