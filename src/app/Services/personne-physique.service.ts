import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PersonnePhysique } from './personne-physique.model';
import { FormBuilder,Validators } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class PersonnePhysiqueService {
listPersonnePhysique: PersonnePhysique[]=new Array();
dataloading:boolean=false;
  constructor(private http:HttpClient, private fb:FormBuilder) { }

AddOrEditPersonnePhysique=this.fb.group({
  PersonneId:["00000000-0000-0000-0000-000000000000"],
  nomRaisonSocial:["",Validators.required],
  prenom :["",Validators.required],
  dateNaiss:["",Validators.required],
  lieu :["",Validators.required],
  nature :["",Validators.required],
  classe :["",Validators.required],
  telephone :["",Validators.required],
  cin  :["",Validators.required],
  delivreCin :["",Validators.required],
  lieuCin:["",Validators.required],
  matriculeFiscal:["",Validators.required],
  adressePhysique:["",Validators.required],
  siege:["",Validators.required],
  mentionEnregistrement:["",Validators.required],

});
initialiazeAddOrUpdateFormForAdd(){
  this.AddOrEditPersonnePhysique.setValue({
    PersonneId:["00000000-0000-0000-0000-000000000000"],
    nomRaisonSocial:"",
    prenom :"",
    dateNaiss:"",
    lieu :"",
    nature :"",
    classe :"",
    telephone :"",
    cin  :"",
    delivreCin :"",
    lieuCin:"",
    matriculeFiscal:"",
    adressePhysique:"",
    siege:"",
    mentionEnregistrement:"",

  });
}
initializeAddOrUpdateFormForUpdate( perphy: PersonnePhysique){
this.AddOrEditPersonnePhysique.setValue({
  // PersonneId: perphy.PersonneId,
  nomRaisonSocial:perphy.nomRaisonSocial,
    prenom :perphy. prenom,
    dateNaiss:perphy.dateNaiss,
    lieu :perphy.lieu,
    nature :perphy.nature,
    classe :perphy.classe,
    telephone :perphy.telephone,
    cin  :perphy. cin,
    delivreCin :perphy.delivreCin,
    lieuCin:perphy.lieuCin,
    matriculeFiscal:perphy. matriculeFiscal,
    adressePhysique:perphy.adressePhysique,
    siege:perphy. siege,
    mentionEnregistrement:perphy.mentionEnregistrement,

});
}

 
    GetList() {
      return this.http.get(environment.personne_ms+ "Physique/GetListPhysique");
  }

  post(){
    return this.http.post(environment.personne_ms+ "Physique/PostPhysique",this.AddOrEditPersonnePhysique.value)
  }
  update(){
    return this.http.put(environment.personne_ms+ "Physique/PutPhysique",this.AddOrEditPersonnePhysique.value);
    }
   delete(PersonneId : string){
  return this.http.delete(environment.personne_ms+ "Physique/DeletePhysique"+PersonneId);
  } 
  GetById(PersonneId : string){
    return this.http.get(environment.personne_ms+ "Physique/Physique"+PersonneId);
  }

  refreshlist(){
    this.GetList().subscribe(
      (res)=> {
  this.listPersonnePhysique  =res as PersonnePhysique[];
  if (this.listPersonnePhysique.length>=0)this.dataloading=true;
      },
      (err)=>{
        console.log(err);
      }
      
    );
  }

  resetform(){
    this.AddOrEditPersonnePhysique.reset({
      PersonneId: "00000000-0000-0000-0000-000000000000",
      nomRaisonSocial: "",
      prenom :"",
      dateNaiss:"",
      lieu:"",
      nature:"",  
      classe:"",
      telephone:"",
      cin  :"",
      delivreCin:"",
      lieuCin:"",
      matriculeFiscal :"",
      adressePhysique:"",
      siege:"",
      mentionEnregistrement:"",

    });
  }
}







