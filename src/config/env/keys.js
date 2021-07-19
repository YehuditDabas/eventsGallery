import serverKeys from './server'
import dev from './server';
import prod from './server'
import local from './localhost'

const host= window.location.hostname;

const keys = host.includes('dev') ?
    dev :
    host.includes('local') ?
        local :
        prod
export default keys;
