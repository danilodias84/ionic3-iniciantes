import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  //criando uma variável (o tipo da variável é opcional)
  public nomeUsuario:string = "Dias, Danilo C.";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  //As 3 funções estão funcionando
  /*public somar():void{
    alert("Testando!");
  }

  public somar2(n1:number, n2:number):void{
    alert(n1+" + "+n2+" = "+ (n1+n2));
  }

  public somar3(n1:number, n2:number):string{
    return n1 + " + " + n2 + " = " + (n1+n2);
  }*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    /*this.somar();
    this.somar2(3, 7);
    alert(this.somar3(5, 9.4));*/
  }

}
