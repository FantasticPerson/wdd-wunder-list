import Dexie from 'dexie'
import migrations from './migrations'
import models from '../model'
import filterStoreIndex from '../utils/filteStoreIndex'
import uppercaseCapitalChar from '../utils/uppercase-captical-char'

export default ()=>{
    let app_db = new Dexie('wdd-wunder-list')
    window.app_db = app_db

    migrations.forEach((migration)=>{
        migrationVersion(migration,app_db)
        binModelCls(migration.stores)
    })

    app_db.on('error', (err) => {
        console.error('Dexie App Error, ', err.stack || err);
    });
    
    return app_db.open()
        .then(()=>{
            return app_db;
        })
}

function migrationVersion(migration, app_db) {
    if(isNaN(migration.ver)) {
        throw new Error('migrations ver is not number!');
    }

    let stores = migration.stores;
    if(!stores) {
        throw new Error('migrations stores is null!');
    }

    let newStore = {};
    Object.keys(stores).forEach(storeName => {
        newStore[storeName] = filterStoreIndex(stores[storeName]).join(',');
    });

    let dexieVersionInst = app_db.version(migration.ver);
    dexieVersionInst.stores(newStore);

    if(!migration.upgrade || typeof migration.upgrade !== 'function') {
        dexieVersionInst.upgrade(migration.upgrade);
    }
}

function binModelCls(stores) {
    Object.keys(stores).forEach(storeName => {
        let modelName = uppercaseCapitalChar(storeName);
        let modelCls = models[modelName];
        if(!modelCls) return;

        let storeIns = app_db[storeName];
        modelCls.store = storeIns;

        storeIns.mapToClass(modelCls, modelCls.schema);
    });
}