import {Injectable} from '@angular/core';
/*
  Generated class for the Sqlite provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
declare var window : any;
@Injectable()
export class Sqlite {
  public text : string = "";
  public db = null;
  public arr = [];
  constructor() {}
 /**
  * 
  * Open The Datebase
  */
  openDb() {
    this.db = window
      .sqlitePlugin
      .openDatabase({name: 'todo.db', location: 'default'});
    this
      .db
      .transaction((tx) => {
        tx.executeSql('CREATE TABLE IF NOT EXISTS workoutpln (id integer primary key autoincrement, wrk text, sets integer, reps integer, day text)');
      }, (e) => {
        console.log('Transtion Error', e);
      }, () => {
        console.log('Populated Datebase OK..');
      })

    this
      .db
      .transaction((tx) => {
        tx.executeSql('CREATE TABLE IF NOT EXISTS proweight (id integer primary key autoincrement, weight integer)');
      }, (e) => {
        console.log('Transtion Error proweight', e);
      }, () => {
        console.log('Populated Datebase OK proweight');
      })    

       this
      .db
      .transaction((tx) => {
        tx.executeSql('CREATE TABLE IF NOT EXISTS patient (id integer primary key autoincrement, name text, age integer, diseas integer, day text)');
      }, (e) => {
        console.log('Transtion Error proweight', e);
      }, () => {
        console.log('Populated Datebase OK proweight');
      })      
  }
  /**
   * 
   * @param addItem for adding: function
   */
  addItemMonday(i, k, m) {
    return new Promise(resolve => {
      var InsertQuery = "INSERT INTO patient (name,age,diseas,day) VALUES (?,?,?,'monday')";
      this
        .db
        .executeSql(InsertQuery, [i,k,m], (r) => {
          console.log('Success pati', i);
          this
            .getRowsMonday()
            .then(s => {
              resolve(true)
            });
        }, e => {
          console.log('Inserted Error pati', e);
          resolve(false);
        })
    })
  }

  //gets day1 data
  getRowsMonday() {
    return new Promise(res => {
      this.arr = [];
      let query = "SELECT * FROM patient where day = 'monday' ";
      this
        .db
        .executeSql(query, [], rs => {
          if (rs.rows.length > 0) {
            for (var i = 0; i < rs.rows.length; i++) {
              var item = rs
                .rows
                .item(i);
              this
                .arr
                .push(item);
            }
          }
          res(true);
        }, (e) => {
          console.log('Sql Query Error', e);
        });
    })

  }
    del_monday(id) {
    return new Promise(resolve => {
      var query = "DELETE FROM patient WHERE id=?";
      this
        .db
        .executeSql(query, [id], (s) => {
          console.log('Delete Success pati...', s);
          this
            .getRowsMonday()
            .then(s => {
              resolve(true);
            });
        }, (err) => {
          console.log('Deleting Error pati', err);
        });
    })

  }
//----------------------------------------------
//adding data to day2
    addItemTuesday(i, k, m) {
    return new Promise(resolve => {
      var InsertQuery = "INSERT INTO patient (name,age,diseas,day) VALUES (?,?,?,'tuesday')";
      this
        .db
        .executeSql(InsertQuery, [i,k,m], (r) => {
          console.log('Inserted... Sucess..', i);
          this
            .getRowsTusesday()
            .then(s => {
              resolve(true)
            });
        }, e => {
          console.log('Inserted Error', e);
          resolve(false);
        })
    })
  }
  //getting tue data
    getRowsTusesday() {
    return new Promise(res => {
      this.arr = [];
      let query = "SELECT * FROM patient where day = 'tuesday' ";
      this
        .db
        .executeSql(query, [], rs => {
          if (rs.rows.length > 0) {
            for (var i = 0; i < rs.rows.length; i++) {
              var item = rs
                .rows
                .item(i);
              this
                .arr
                .push(item);
            }
          }
          res(true);
        }, (e) => {
          console.log('Sql Query Error', e);
        });
    })

  }
    delTuesday(id) {
    return new Promise(resolve => {
      var query = "DELETE FROM patient WHERE id=?";
      this
        .db
        .executeSql(query, [id], (s) => {
          console.log('Delete Success...', s);
          this
            .getRowsTusesday()
            .then(s => {
              resolve(true);
            });
        }, (err) => {
          console.log('Deleting Error', err);
        });
    })

  }
//-------------------------------------------------------------
//---------------------------------------------------------------
//adding data to day3
    addItemWed(i, k, m) {
    return new Promise(resolve => {
   var InsertQuery = "INSERT INTO patient (name,age,diseas,day) VALUES (?,?,?,'wed')";
      this
        .db
        .executeSql(InsertQuery, [i,k,m], (r) => {
          console.log('Inserted... Sucess..', i);
          this
            .getRowsWed()
            .then(s => {
              resolve(true)
            });
        }, e => {
          console.log('Inserted Error', e);
          resolve(false);
        })
    })
  }
    //getting day3 data
    getRowsWed() {
    return new Promise(res => {
      this.arr = [];
      let query = "SELECT * FROM patient where day = 'wed' ";
      this
        .db
        .executeSql(query, [], rs => {
          if (rs.rows.length > 0) {
            for (var i = 0; i < rs.rows.length; i++) {
              var item = rs
                .rows
                .item(i);
              this
                .arr
                .push(item);
            }
          }
          res(true);
        }, (e) => {
          console.log('Sql Query Error', e);
        });
    })

  }
    delWed(id) {
    return new Promise(resolve => {
      var query = "DELETE FROM patient WHERE id=?";
      this
        .db
        .executeSql(query, [id], (s) => {
          console.log('Delete Success...', s);
          this
            .getRowsWed()
            .then(s => {
              resolve(true);
            });
        }, (err) => {
          console.log('Deleting Error', err);
        });
    })

  }
//-------------------------------------------------------------
//---------------------------------------------------------------
//adding data to day4
    addItemThu(i, k, m) {
    return new Promise(resolve => {
      var InsertQuery = "INSERT INTO patient (name,age,diseas,day) VALUES (?,?,?,'thu')";
      this
        .db
        .executeSql(InsertQuery, [i,k,m], (r) => {
          console.log('Inserted... Sucess..', i);
          this
            .getRowsThu()
            .then(s => {
              resolve(true)
            });
        }, e => {
          console.log('Inserted Error', e);
          resolve(false);
        })
    })
  }
    //getting day4 data
    getRowsThu() {
    return new Promise(res => {
      this.arr = [];
      let query = "SELECT * FROM patient where day = 'thu' ";
      this
        .db
        .executeSql(query, [], rs => {
          if (rs.rows.length > 0) {
            for (var i = 0; i < rs.rows.length; i++) {
              var item = rs
                .rows
                .item(i);
              this
                .arr
                .push(item);
            }
          }
          res(true);
        }, (e) => {
          console.log('Sql Query Error', e);
        });
    })

  }
    delThu(id) {
    return new Promise(resolve => {
      var query = "DELETE FROM patinet WHERE id=?";
      this
        .db
        .executeSql(query, [id], (s) => {
          console.log('Delete Success...', s);
          this
            .getRowsThu()
            .then(s => {
              resolve(true);
            });
        }, (err) => {
          console.log('Deleting Error', err);
        });
    })

  }
//-------------------------------------------------------------

//---------------------------------------------------------------
//adding data to day5
    addItemFri(i, k, m) {
    return new Promise(resolve => {
 var InsertQuery = "INSERT INTO patient (name,age,diseas,day) VALUES (?,?,?,'fri')";
      this
        .db
        .executeSql(InsertQuery, [i,k,m], (r) => {
          console.log('Inserted... Sucess..', i);
          this
            .getRowsFri()
            .then(s => {
              resolve(true)
            });
        }, e => {
          console.log('Inserted Error', e);
          resolve(false);
        })
    })
  }
    //getting day5 data
    getRowsFri() {
    return new Promise(res => {
      this.arr = [];
      let query = "SELECT * FROM patient where day = 'fri' ";
      this
        .db
        .executeSql(query, [], rs => {
          if (rs.rows.length > 0) {
            for (var i = 0; i < rs.rows.length; i++) {
              var item = rs
                .rows
                .item(i);
              this
                .arr
                .push(item);
            }
          }
          res(true);
        }, (e) => {
          console.log('Sql Query Error', e);
        });
    })

  }
    delFri(id) {
    return new Promise(resolve => {
      var query = "DELETE FROM patient WHERE id=?";
      this
        .db
        .executeSql(query, [id], (s) => {
          console.log('Delete Success...', s);
          this
            .getRowsFri()
            .then(s => {
              resolve(true);
            });
        }, (err) => {
          console.log('Deleting Error', err);
        });
    })

  }
//-------------------------------------------------------------
//---------------------Add data to progress---------------------------------------------------
    addWeight(i) {
    return new Promise(resolve => {
      var InsertQuery = "INSERT INTO proweight (weight) VALUES (?)";
      this
        .db
        .executeSql(InsertQuery, [i], (r) => {
          console.log('Inserted... Sucess..', i);
          this
            .getWeight()
            .then(s => {
              resolve(true)
            });
        }, e => {
          console.log('Inserted Error', e);
          resolve(false);
        })
    })
  }
//getting weight
      getWeight() {
    return new Promise(res => {
      this.arr = [];
      let query = "SELECT weight FROM proweight";
      this
        .db
        .executeSql(query, [], rs => {
          if (rs.rows.length > 0) {
            for (var i = 0; i < rs.rows.length; i++) {
              var item = rs
                .rows
                .item(i);
              this
                .arr
                .push(item);
            }
          }
          res(true);
        }, (e) => {
          console.log('Sql Query Error', e);
        });
    })

  }


//------------------------------------------------------------------------

  //to Update any Item
  update(id, txt) {
    return new Promise(res => {
      var query = "UPDATE workoutpln SET  WHERE id=?";
      this
        .db
        .executeSql(query, [
          txt, id
        ], (s) => {
          console.log('Update Success...', s);
          this
            .getRowsMonday()
            .then(s => {
              res(true);
            });
        }, (err) => {
          console.log('Updating Error', err);
        });
    })

  }

}
