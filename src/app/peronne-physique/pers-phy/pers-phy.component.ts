
import { Component, OnInit } from '@angular/core';
import { PersonnePhysique } from 'src/app/Services/personne-physique.model';
// import{BsModalRef,BsModalService}from '';
import { PersonnePhysiqueService } from 'src/app/Services/personne-physique.service';
@Component({
  selector: 'app-pers-phy',
  templateUrl: './pers-phy.component.html',
  styleUrls: ['./pers-phy.component.css']
})
export class PersPhyComponent implements OnInit {

  constructor(
    // public bsModalRef:BsModalRef,
    // private modalService:BsModalService, 
    private personneService:PersonnePhysiqueService) { }

  ngOnInit() {}
onSubmit(){
  if (this.personneService.AddOrEditPersonnePhysique.controls.PersonneId.value=="00000000-0000-0000-0000-000000000000"){
    this.Post();
  }
  else {
    this.Update()
  }
}
Post(){
  this.personneService.post().subscribe(
    (res)=>{
      this.personneService.refreshlist()
      this.personneService.resetform()
    },
    (err)=>{
      console.log(err);
    }
  );
}
Update(){
  this.personneService.update().subscribe(
    (res)=>{
      this.personneService.refreshlist()
      this.personneService.resetform()
    },
    (err)=>{
      console.log(err);
    }
  
  );
}
}
