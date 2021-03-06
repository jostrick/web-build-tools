import gulp = require('gulp');
import Orchestrator = require('orchestrator');

/* tslint:disable:max-line-length */
export class GulpProxy extends Orchestrator implements gulp.Gulp {
  public src: gulp.SrcMethod;
  public dest: gulp.DestMethod;
  public watch: gulp.WatchMethod;

  private _gulp: gulp.Gulp;

  constructor(gulpInstance: gulp.Gulp) {
    super();
    this._gulp = gulpInstance;
    this.src = gulpInstance.src;
    this.dest = gulpInstance.dest;
    this.watch = gulpInstance.watch;
  }

  /* tslint:disable-next-line:no-any */
  public task(): any {
    throw new Error(
      'You should not define gulp tasks, but instead subclass the GulpTask and override the executeTask method.'
    );
  }
}
