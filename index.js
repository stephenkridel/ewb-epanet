import { Project, Workspace } from 'epanet-js';

const ws = new Workspace();
const model = new Project(ws);

// Needed only if the model doesn't receive data from an input file
model.init('report.rpt', 'out.bin', 1, 1);

const n1Index = model.addNode('N1', 0);
const n2Index = model.addNode('N2', 0);
model.setJunctionData(n1Index, 700, 0, '');
model.setJunctionData(n2Index, 400, 0, '');

const l1Index = model.addLink('L1', 1, 'N1', 'N2');
