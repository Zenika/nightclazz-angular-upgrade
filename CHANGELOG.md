## 12

### `@angular/cli`

❯ Remove deprecated options from 'angular.json' that are no longer present in v12.

❯ Update 'zone.js' to version 0.11.x.

❯ Remove 'emitDecoratorMetadata' TypeScript compiler option.

❯ Lazy loading syntax migration.

❯ Remove deprecated ViewEngine-based i18n build and extract options.

❯ Updates Web Worker consumer usage to use the new syntax supported directly by Webpack 5.

❯ Remove invalid 'skipTests' option in '@schematics/angular:module' Angular schematic options.

❯ Replace the deprecated '--prod' in package.json scripts.

### `@angular/core`

❯ In Angular version 12, the type of ActivatedRouteSnapshot.fragment is nullable.

❯ `XhrFactory` has been moved from `@angular/common/http` to `@angular/common`.

❯ Automatically migrates shadow-piercing selector from `/deep/` to the recommended alternative `::ng-deep`.

## 11

### `@angular/cli`

❯ Replace deprecated library builder '@angular-devkit/build-ng-packagr'.

❯ Add 'declarationMap' compiler options for non production library builds.

❯ Remove deprecated options from 'angular.json' that are no longer present in v11.

❯ Update workspace dependencies to match a new v11 project.

### `@angular/core`

❯ In Angular version 11, the type of `AbstractControl.parent` can be `null` to reflect the runtime value more accurately.

❯ ViewEncapsulation.Native has been removed as of Angular version 11.

❯ NavigationExtras omissions migration.

❯ Updates the `initialNavigation` property for `RouterModule.forRoot`.

❯ NavigationExtras.preserveQueryParams has been removed as of Angular version 11.

❯ The default value for `relativeLinkResolution` is changing from 'legacy' to 'corrected'.

❯ `async` to `waitForAsync` migration.

❯ Removes `canActivate` from a `Route` config when `redirectTo` is also present.
