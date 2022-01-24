import { BillingComponent } from './billing/billing.component';
import { ShopComponent } from './shop/shop.component';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: ShopComponent
  },
  
  {
    path: 'billing',
    loadChildren: () => import('./billing/billing.module')
      .then(m => m.BillingModule),
  },
  {
    path: 'chat',
    component: BillingComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



/*

export const routes: Routes = [

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: MainContentComponent,
    canActivate: [AuthGuard],
  },

  // TODO: Move it to the respective module once is implemented
  {
    path: 'diagnosticbookmark',
    component: DiagnosticBookmarkComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'diagnosticcontainer',
    canActivate: [AuthGuard],
    loadChildren: () => import('./components/content/diagnostic-finding-view/diagnostic-find-view.module')
      .then(m => m.DiagnosticFindViewModule),
  },

  {
    path: 'diagnostictransmission',
    data: {roles: ['LabaccessUser']},
    component: DiagnosticFindingTransmissionComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'registerNewUser/:userName',
    component: RegisterNewUserComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },

  {
    path: 'impressum',
    component: ImpressumComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },

  {
    path: 'termsofuse',
    component: TermsOfUseComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },

  {
    path: 'dataprivacystatement',
    component: DataPrivacyStatementComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },

  {
    path: 'contact',
    component: ContactComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },

  {
    path: 'serviceandsupport',
    data: {roles: ['Administrators', 'Admin']},
    component: ServiceAndSupportComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'manageuser',
    data: {
      roles: ['ApplicationAdmin', 'LocationAdmin']
    },
    component: ManageUserComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'adminusermanager',
    data: {
      roles: ['ApplicationAdmin']
    },
    component: AdminUsermanagerComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'users',
    data: {scope: 'users', roles: ['ApplicationAdmin', 'UserAdmin']},
    component: MasterDataComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'editlocations',
    data: {scope: 'users', roles: ['ApplicationAdmin', 'LocationAdmin']},
    component: EditLocationsComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'chat',
    data: {roles: ['ApplicationAdmin']},
    component: ChatComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'regeln',
    data: {roles: ['ApplicationAdmin', 'RuleAdmin', 'LocationAdmin']},
    component: RegelnComponent,
    canActivate: [AuthGuard],

    children: [
      {
        component: RegelnUbersichtComponent,
        path: '',
        pathMatch: 'full'
      },
      {
        component: NeuRegelComponent,
        path: 'neu-regeln',
        pathMatch: 'full'
      },
      {
        component: NeuRegelComponent,
        path: ':id/edit',
        pathMatch: 'full'
      },
    ]
  },

  {
    path: 'sync-configuration',
    canActivate: [AuthGuard],
    loadChildren: () => import('./components/sync-configuration/sync-configuration.module').then(m => m.SyncConfigurationModule)
  },

  {
    path: 'vidatelist',
    canActivate: [AuthGuard],
    loadChildren: () => import('./components/vidate/vidate.module').then(m => m.VidateModule)
  },

  {
    path: 'errorlist',
    canActivate: [AuthGuard],
    loadChildren: () => import('./components/errorlist/errorlist.module').then(m => m.ErrorlistModule)
  },

  {
    path: 'standardcontent',
    canActivate: [AuthGuard],
    loadChildren: () => import('./components/standardcontent/standardcontent.module').then(m => m.StandardcontentModule)
  },

  {
    path: 'redistribution',
    data: {roles: ['ApplicationAdmin', 'ReportSendAdmin', 'LocationAdmin']},
    component: RedistributionComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'gatewayclientconfig',
    canActivate: [AuthGuard],
    loadChildren: () => import('./components/gateway-client-config/gateway-client-config.module').then(m => m.GatewayClientConfigModule)
  },

  {
    path: 'customer-management',
    canActivate: [AuthGuard],
    loadChildren: () => import('./components/customer-management/customer-management.module').then(m => m.CustomerManagementModule)
  },

  {
    path: 'printjobs',
    canActivate: [AuthGuard],
    loadChildren: () => import('./components/printjobs/printjobs.module').then(m => m.PrintjobsModule)
  },

  // TODO: add not found page
  // {
  //     path: '**',
  //     redirectTo: 'not-found',
  //     component: NotFoundComponent
  // }
];
*/
