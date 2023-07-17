import { LeaveForm } from "../model/leave-application-form.model";
import { BehaviorSubject } from "rxjs";

export class LeaveService{
    leaveDataList : LeaveForm[] | any = [];

    leaveSub = new BehaviorSubject(this.leaveDataList.slice());

    getLeaveList(){
        return this.leaveDataList.slice();
    }

    addLeaveList(newLeave : any){
        this.leaveDataList.push(newLeave);
        this.leaveSub.next(this.leaveDataList.slice())
        console.log(this.leaveDataList)
    }
}