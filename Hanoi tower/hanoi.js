
function hanoiTower(disk, source, dest, aux) {
    if (disk == 1) {
        console.log(`move ${disk} from ${source} to ${dest}`);
    }
    else {
        hanoiTower(disk - 1, source, aux, dest);
        console.log(`move ${disk} from ${source} to ${dest}`);
        hanoiTower(disk - 1, aux, dest, source);
    }
}


hanoiTower(123, 'A', 'C', 'B');



