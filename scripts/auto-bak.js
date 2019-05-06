require("shelljs/global");

run();

function run() {
    if (!which("git")) {
        echo("Sorry, this script requires git");
        exit(1);
    } else {
        echo("======================Auto Backup Begin======================");

        var odir_book = exec(odir_book=`ls ~/gitbooks/gitbook`);

        var git_book = "~/gitbooks/gitbook/" + odir_book + '/';

        echo("git_book:"+git_book);

        git_book = git_book.replace(/[\r\n]/g,"");

        echo("git_book1:"+git_book);

        cd(git_book);
        echo("----------------------Updated----------------------");
        exec("git pull origin");
        //此处修改为Hexo根目录路径
        if (exec("git add --all").code !== 0) {
            echo("Error: Git add failed");
            exit(1);
        }
        if (exec('git commit -am "Form auto backup script\'s commit"').code !== 0) {
            echo("Error: Git commit failed");
            exit(1);
        }
        if (exec("git push origin").code !== 0) {
            echo("Error: Git push failed");
            exit(1);
        }
        echo("======================Auto Backup Complete======================");
    }
}