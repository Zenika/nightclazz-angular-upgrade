## 14

### `@angular/cli`

❯ Remove 'defaultProject' option from workspace configuration.

❯ Remove 'showCircularDependencies' option from browser and server builders.

❯ Replace 'defaultCollection' option in workspace configuration with 'schematicCollections'.

❯ Update Angular packages 'dependencies' and 'devDependencies' version prefix to '^' instead of '~'.

❯ Remove 'package.json' files from library projects secondary entrypoints.

❯ Update TypeScript compilation target to 'ES2020'.

### `@angular/core`

❯ As of Angular version 13, `entryComponents` are no longer necessary.

❯ In Angular version 14, the `pathMatch` property of `Routes` was updated to be a strict union of the two valid options: `'full'|'prefix'`.
`Routes` and `Route` variables need an explicit type so TypeScript does not infer the property as the looser `string`.

❯ As of Angular version 14, Forms model classes accept a type parameter, and existing usages must be opted out to preserve backwards-compatibility.

## 13

### `@angular/cli`

❯ Remove polyfills required only for Internet Explorer which is no longer supported.

❯ Remove no longer valid Angular schematic options from `angular.json`.

❯ Remove deprecated options from 'angular.json' that are no longer present in v13.

❯ Updating '.gitignore' to include '.angular/cache'.

❯ Update library projects to be published in partial mode and removed deprecated options from ng-packagr configuration.

### `@angular/core`

❯ Migrates `[routerLink]=""` in templates to `[routerLink]="[]"` because these links are likely intended to route to the current page with updated fragment/query params.

❯ In Angular version 13, the `teardown` flag in `TestBed` will be enabled by default.

❯ As of Angular version 13, `entryComponents` are no longer necessary.

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
