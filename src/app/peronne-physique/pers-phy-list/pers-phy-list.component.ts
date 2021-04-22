import { Component, OnInit } from '@angular/core';
import { PersonnePhysique } from 'src/app/Services/personne-physique.model';
import { PersonnePhysiqueService } from 'src/app/Services/personne-physique.service';

@Component({
  selector: 'app-pers-phy-list',
  templateUrl: './pers-phy-list.component.html',
  styleUrls: ['./pers-phy-list.component.css']
})
export class PersPhyListComponent implements OnInit {
p:number=1;
itemsPerPage:number;
currentPage: number;

// bsModalRef:BsModalRef;
message:string;

  constructor( private personneService:PersonnePhysiqueService){ }
  
  personneList:PersonnePhysique[];



  ngOnInit(): void {
    this.personneList=[];
    this.getPersonneList()
  }



getPersonneList()
{
  this.personneService.GetList().subscribe(
    data=>{
      this.personneList=data as PersonnePhysique[];
      console.log( this.personneList)
 
    },
    error=>{
      console.log(error)
    }
  )
}

}


