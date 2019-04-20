import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PageComponent } from '../../../shared/components/page/page.component';

// import { TranslateService } from '@ngx-translate/core';

// import { PageComponent } from './../../../shared/components/page/page.component';
// import { AuthService } from './../../../shared/services/auth.service';
// import { HomeService } from './../../services/home.service';
// import { DashboardHome } from './../../models/dashboard-home';
// import { PieChartConfig } from './../../../shared/models/pie-chart-config';
// import { ColumnChartConfig } from './../../../shared/models/column-chart-config';
// import { ColumnchartComponent } from './../../../shared/components/charts/columnchart/columnchart/columnchart.component';
// import { PiechartComponent } from './../../../shared/components/charts/piechart/piechart.component';
// import { ModalFilterComponent } from 'app/shared/components/modal-filter/modal-filter.component';

@Component({
  templateUrl: './home-page.component.html',
  providers: [
    // HomeService
  ]
})
export class HomePageComponent  extends PageComponent implements OnInit {

  // public modelDashboard: DashboardHome;

  // @ViewChild('columnChartLeituraCentro') columnChartLeituraCentro: ColumnchartComponent;
  // @ViewChild('columnChartLeituraLote') columnChartLeituraLote: ColumnchartComponent;
  // @ViewChild('pieChartFoto') pieChartFoto: PiechartComponent;
  // @ViewChild('modalFilter') modalFilter: ModalFilterComponent;

  // chartFotoVisible: boolean = false;
  // chartLeituraCentroVisible: boolean = false;
  // chartLeituraLoteVisible: boolean = false;

  // dataFotoPie: any[];
  // configFotoPie: PieChartConfig;
  // elementIdFotoPie: String;
  // mesAno: String;
  // mesAnoTexto: String;

  // dataLeituraCentroColumn: any[];
  // configLeituraCentroColumn: ColumnChartConfig;
  // elementIdLeituraCentroColumn: String;

  // dataLeituraLoteColumn: any[];
  // configLeituraLoteColumn: ColumnChartConfig;
  // elementIdLeituraLoteColumn: String;

  constructor(router: Router,
    // authService: AuthService,
    // private homeService: HomeService,
    // private translate: TranslateService
    ) {
    // super(router, authService);
     super(router);
  }

  ngOnInit(): void {
    // this.modelDashboard = new DashboardHome();

    // this.elementIdFotoPie = 'pieChartFoto';
    // this.elementIdLeituraCentroColumn = 'columnChartLeituraCentro';
    // this.elementIdLeituraLoteColumn = 'columnChartLeituraLote';

    // this.modalFilter.init(() => this.filter());

    // this.search();

    // let functionPie: Function = () => this.bindChartPie(this.modelDashboard.dadosFotosChart);

    // let functionLoteColumn: Function = () => this.bindChartColumn(this.modelDashboard.dadosLeiturasExecutadasLote,
    //                                                               this.dataLeituraLoteColumn,
    //                                                               this.configLeituraLoteColumn,
    //                                                               this.elementIdLeituraLoteColumn,
    //                                                               this.columnChartLeituraLote,
    //                                                               'home.fields.leiturasExecutadasLote_display',
    //                                                               'home.fields.leiturasRealizar_display',
    //                                                               'home.fields.leiturasRealizadas_display');

    // let functionCentroColumn: Function = () => this.bindChartColumn(this.modelDashboard.dadosLeiturasCentroLeitura,
    //                                                                 this.dataLeituraCentroColumn,
    //                                                                 this.configLeituraCentroColumn,
    //                                                                 this.elementIdLeituraCentroColumn,
    //                                                                 this.columnChartLeituraCentro,
    //                                                                 'home.fields.leiturasExecutadasCentroLeitura_display',
    //                                                                 'home.fields.leiturasRealizar_display',
    //                                                                 'home.fields.leiturasRealizadas_display');

    // window.addEventListener('resize', function() {
    //   functionPie.call(null);
    //   functionLoteColumn.call(null);
    //   functionCentroColumn.call(null);
    // });
  }

  public showfilter(): void {
    // this.modalFilter.open();
  }

  public filter(): void {
    // this.search();
    // this.modalFilter.close();
  }

  private search(): void {
    // this.isLoading = true;

    // this.homeService
    //   .buscarDadosDashboardPaginaInicial(this.mesAno)
    //   .subscribe(result => {
    //     this.modelDashboard = result;

    //     this.chartLeituraCentroVisible = this.bindChartColumn(result.dadosLeiturasCentroLeitura,
    //                                                         this.dataLeituraCentroColumn,
    //                                                         this.configLeituraCentroColumn,
    //                                                         this.elementIdLeituraCentroColumn,
    //                                                         this.columnChartLeituraCentro,
    //                                                         'home.fields.leiturasExecutadasCentroLeitura_display',
    //                                                         'home.fields.leiturasRealizar_display',
    //                                                         'home.fields.leiturasRealizadas_display');

    //     this.chartLeituraLoteVisible = this.bindChartColumn(result.dadosLeiturasExecutadasLote,
    //                                                         this.dataLeituraLoteColumn,
    //                                                         this.configLeituraLoteColumn,
    //                                                         this.elementIdLeituraLoteColumn,
    //                                                         this.columnChartLeituraLote,
    //                                                         'home.fields.leiturasExecutadasLote_display',
    //                                                         'home.fields.leiturasRealizar_display',
    //                                                         'home.fields.leiturasRealizadas_display');

    //     this.bindChartPie(result.dadosFotosChart);

    //     this.isLoading = false;
    //   });
  }

  private bindChartPie(dadosPieChart: string): void {
    // if (dadosPieChart) {
    //   this.chartFotoVisible = true;
    //   this.dataFotoPie = [['Qualificação', 'Valor']];

    //   var dados = JSON.parse(dadosPieChart);

    //   dados.forEach(element => {
    //     this.dataFotoPie.push([element["NotaFoto"], element["QuantidadeRegistros"]]);  
    //   });

    //   let slices = {
    //     0: { color: '#A9A9A9' },
    //     1: { color: '#FF2401' },
    //     2: { color: '#FFBF00' },
    //     3: { color: '#00A86B' }
    //   };

    //   let legend = { position: 'right', maxLines: 2, alignment:'center' };

    //   this.configFotoPie = new PieChartConfig(0, 0, true, slices, legend);

    //   setTimeout(() => {
    //     this.pieChartFoto.buildChart(this.elementIdFotoPie, this.dataFotoPie, this.configFotoPie);
    //   }, 100);
    // }
  }

  private bindChartColumn(){
    //dadosColumnChart: string,
    // dataColumn: any[],
    // configColumn: ColumnChartConfig,
    // elementId: String,
    // columnChart: ColumnchartComponent,
    // titleChart: string,
    // tituloLeitura: string,
    // tituloLeituraRet: string): boolean {
    // let visible: boolean = false;

    // if (dadosColumnChart) {
    //   visible = true;

    //   this.translate.get(titleChart)
    //     .subscribe((message: string) => {
    //       titleChart = message;
    //     });

    //   this.translate.get(tituloLeitura)
    //     .subscribe((message: string) => {
    //       tituloLeitura = message;
    //     });

    //   this.translate.get(tituloLeituraRet)
    //     .subscribe((message: string) => {
    //       tituloLeituraRet = message;
    //     });

    //   dataColumn = [[titleChart, tituloLeituraRet, tituloLeitura, { role: 'annotation' }]];

    //   var dados = JSON.parse(dadosColumnChart);

    //   dados.forEach(element => {
    //     dataColumn.push([element["Codigo"],
    //     element["QuantidadeRegistrosRetorno"],
    //     element["QuantidadeRegistrosLeitura"],
    //       '']);
    //   });

    //   let slices = {
    //     0: { color: '#00A86B' },
    //     1: { color: '#FF6347' }
    //   };

    //   configColumn = new ColumnChartConfig(slices);

    //   setTimeout(() => {
    //     columnChart.buildStackedColumnChart(elementId, dataColumn, configColumn);
    //   }, 100);
    // }

    // return visible;
  }
}