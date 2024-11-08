// 打开模态弹窗
function openModal() {
    document.getElementById('login-modal').style.display = 'flex'; // 使用flex居中显示
}

// 关闭模态弹窗
function closeModal() {
    document.getElementById('login-modal').style.display = 'none';
}

// 修改checkLogin函数以使用模态弹窗
function checkLogin() {
    if (sessionStorage.getItem('loggedIn') === 'true') {
        document.getElementById('protected-content').style.display = 'block';
        closeModal(); // 登录成功后关闭模态弹窗
    } else {
        openModal();
    }
}

// 登录函数
function login() {
    const users = {
        'lfy': 'bjut666',
        'cxq': 'bjut666',
        'ljn': 'bjut666',
        'djz': 'bjut666',
        'djr': 'bjut666',
        'nmh': 'bjut666',
        'ljy': 'bjut666',
        'mrc': 'bjut666',
        'hjn': 'bjut666',
        'ljh': 'bjut666',
        'lm': 'bjut666',
        'dqh': 'bjut666',
        'czc': 'bjut666'        
        // 添加更多用户
    };

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 检查用户名和密码
    if (users[username] && users[username] === password) {
        sessionStorage.setItem('loggedIn', 'true');
        document.getElementById('protected-content').style.display = 'block';
        closeModal(); // 登录成功后关闭模态弹窗
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

async function downloadAllPapers1() {
    const zip = new JSZip();
    const folder = zip.folder("Papers_JiarongDu_20240905"); // 创建一个文件夹来存储所有论文

    // 定义所有文件的路径
    const files = [
        './journal_club_papers/P1_JiarongDu_20240905/1-A multi-action deep reinforcement learning framework for flexible Job-shop scheduling problem.pdf',
        './journal_club_papers/P1_JiarongDu_20240905/2-A_Deep_Reinforcement_Learning_Framework_Based_on_an_Attention_Mechanism_and_Disjunctive_Graph_Embedding_for_the_Job-Shop_Scheduling_Problem.pdf',
        './journal_club_papers/P1_JiarongDu_20240905/3-Dynamic scheduling for flexible job shop with insufficient transportation resources via graph neural network and deep reinforcement learning.pdf',
        './journal_club_papers/P1_JiarongDu_20240905/4-Dynamic_Job-Shop_Scheduling_via_Graph_Attention_Networks_and_Deep_Reinforcement_Learning.pdf',
        './journal_club_papers/P1_JiarongDu_20240905/5-Large-Scale_Dynamic_Scheduling_for_Flexible_Job-Shop_With_Random_Arrivals_of_New_Jobs_by_Hierarchical_Reinforcement_Learning.pdf'
    ];

    try {
        // 下载每个文件并将其添加到zip文件中
        for (const file of files) {
            const response = await fetch(file);
            if (!response.ok) throw new Error(`Failed to fetch ${file}`);
            const blob = await response.blob();
            const fileName = file.split('/').pop(); // 从路径中提取文件名
            folder.file(fileName, blob); // 将每个文件添加到zip文件夹中
        }

        // 生成ZIP文件并触发下载
        zip.generateAsync({ type: 'blob' }).then(function(content) {
            saveAs(content, "Papers_JiarongDu_20240905.zip"); // 使用FileSaver.js保存文件
        });
    } catch (error) {
        console.error('Error downloading files:', error);
        alert('Failed to download files. Please check the file paths or try again later.');
    }
}

async function downloadAllPapers2() {
    const zip = new JSZip();
    const folder = zip.folder("Papers_JunnuoLin_20240920"); // 创建一个文件夹来存储所有论文

    // 定义所有文件的路径
    const files = [
        './journal_club_papers/P2_JunnuoLin_20240920/1_Federated_Learning_Over_Coupled_Graphs.pdf',
        './journal_club_papers/P2_JunnuoLin_20240920/2_Cluster-driven Graph Federated Learning over Multiple Domains.pdf',
        './journal_club_papers/P2_JunnuoLin_20240920/3_Federated Learning on Non-IID Graphs via Structural Knowledge Sharing.pdf',
        './journal_club_papers/P2_JunnuoLin_20240920/4_FedGraph Federated Graph Learning With Intelligent Sampling.pdf',
        './journal_club_papers/P2_JunnuoLin_20240920/5_FedGL Federated graph learning framework with global self-supervision.pdf'
    ];

    try {
        // 下载每个文件并将其添加到zip文件中
        for (const file of files) {
            const response = await fetch(file);
            if (!response.ok) throw new Error(`Failed to fetch ${file}`);
            const blob = await response.blob();
            const fileName = file.split('/').pop(); // 从路径中提取文件名
            folder.file(fileName, blob); // 将每个文件添加到zip文件夹中
        }

        // 生成ZIP文件并触发下载
        zip.generateAsync({ type: 'blob' }).then(function(content) {
            saveAs(content, "Papers_JunnuoLin_20240920.zip"); // 使用FileSaver.js保存文件
        });
    } catch (error) {
        console.error('Error downloading files:', error);
        alert('Failed to download files. Please check the file paths or try again later.');
    }
}

async function downloadAllPapers3() {
    const zip = new JSZip();
    const folder = zip.folder("Papers_XuqiangChen_20241004"); // 创建一个文件夹来存储所有论文

    // 定义所有文件的路径
    const files = [
        './journal_club_papers/P3_XuqiangChen_20241004/1_Federated Optimization in Heterogeneous Networks.pdf',
        './journal_club_papers/P3_XuqiangChen_20241004/2_FedBN Federated Learning on Non-IID Features via.pdf',
        './journal_club_papers/P3_XuqiangChen_20241004/3_Model-Contrastive Federated Learning.pdf',
        './journal_club_papers/P3_XuqiangChen_20241004/4_FedFM Anchor-Based Feature Matching for Data Hete.pdf',
        './journal_club_papers/P3_XuqiangChen_20241004/5_Federated Feature Augmentation and Alignment.pdf'
    ];

    try {
        // 下载每个文件并将其添加到zip文件中
        for (const file of files) {
            const response = await fetch(file);
            if (!response.ok) throw new Error(`Failed to fetch ${file}`);
            const blob = await response.blob();
            const fileName = file.split('/').pop(); // 从路径中提取文件名
            folder.file(fileName, blob); // 将每个文件添加到zip文件夹中
        }

        // 生成ZIP文件并触发下载
        zip.generateAsync({ type: 'blob' }).then(function(content) {
            saveAs(content, "Papers_XuqiangChen_20241004.zip"); // 使用FileSaver.js保存文件
        });
    } catch (error) {
        console.error('Error downloading files:', error);
        alert('Failed to download files. Please check the file paths or try again later.');
    }
}

async function downloadAllPapers4() {
    const zip = new JSZip();
    const folder = zip.folder("Papers_JunzhuDuan_20241017"); // 创建一个文件夹来存储所有论文

    // 定义所有文件的路径
    const files = [
        './journal_club_papers/P4_JunzhuDuan_20241017/1_AutoDIAL_Automatic_Domain_Alignment_Layers.pdf',
        './journal_club_papers/P4_JunzhuDuan_20241017/2_Motiian_Unified_Deep_Supervised_ICCV_2017_paper.pdf',
        './journal_club_papers/P4_JunzhuDuan_20241017/3_Saito_Strong-Weak_Distribution_Alignment_for_Adaptive_Object_Detection_CVPR_2019_paper.pdf',
        './journal_club_papers/P4_JunzhuDuan_20241017/4_Zhu_Adapting_Object_Detectors_via_Selective_Cross-Domain_Alignment_CVPR_2019_paper.pdf',
        './journal_club_papers/P4_JunzhuDuan_20241017/5_Pixel_and_feature_level_based_domain_adaptation_for_object_detection.pdf'
    ];

    try {
        // 下载每个文件并将其添加到zip文件中
        for (const file of files) {
            const response = await fetch(file);
            if (!response.ok) throw new Error(`Failed to fetch ${file}`);
            const blob = await response.blob();
            const fileName = file.split('/').pop(); // 从路径中提取文件名
            folder.file(fileName, blob); // 将每个文件添加到zip文件夹中
        }

        // 生成ZIP文件并触发下载
        zip.generateAsync({ type: 'blob' }).then(function(content) {
            saveAs(content, "Papers_JunzhuDuan_20241017.zip"); // 使用FileSaver.js保存文件
        });
    } catch (error) {
        console.error('Error downloading files:', error);
        alert('Failed to download files. Please check the file paths or try again later.');
    }
}

async function downloadAllPapers5() {
    const zip = new JSZip();
    const folder = zip.folder("Papers_MohanNiu_20241031"); // 创建一个文件夹来存储所有论文

    // 定义所有文件的路径
    const files = [
        './journal_club_papers/P5_MohanNiu_20241031/1_PMIC_Improving_Multi-Agent_Reinforcement_Learning_with_Progressive_Mutual_Information_Collaboration.pdf',
        './journal_club_papers/P5_MohanNiu_20241031/2_Effective_and_Stable_Role-Based_Multi-Agent_Collaboration_by_Structural_Information_Principles.pdf',
        './journal_club_papers/P5_MohanNiu_20241031/3_Maximum_Entropy_Heterogeneous-Agent_Reinforcement_Learning.pdf',
        './journal_club_papers/P5_MohanNiu_20241031/4_Attention-Guided_Contrastive_Role_Representations_for_Multi-Agent_Reinforcement_Learning.pdf',
        './journal_club_papers/P5_MohanNiu_20241031/5_STAR_Spatio-Temporal_State_Compression_for_Multi-Agent_Tasks.pdf'
    ];

    try {
        // 下载每个文件并将其添加到zip文件中
        for (const file of files) {
            const response = await fetch(file);
            if (!response.ok) throw new Error(`Failed to fetch ${file}`);
            const blob = await response.blob();
            const fileName = file.split('/').pop(); // 从路径中提取文件名
            folder.file(fileName, blob); // 将每个文件添加到zip文件夹中
        }

        // 生成ZIP文件并触发下载
        zip.generateAsync({ type: 'blob' }).then(function(content) {
            saveAs(content, "Papers_MohanNiu_20241031.zip"); // 使用FileSaver.js保存文件
        });
    } catch (error) {
        console.error('Error downloading files:', error);
        alert('Failed to download files. Please check the file paths or try again later.');
    }
}

async function downloadAllPapers6() {
    const zip = new JSZip();
    const folder = zip.folder("Papers_JinyiLiu_20241114"); // 创建一个文件夹来存储所有论文

    // 定义所有文件的路径
    const files = [
        './journal_club_papers/P6_JinyiLiu_20241114/1_maven-multi-agent-variational-exploration.pdf',
        './journal_club_papers/P6_JinyiLiu_20241114/2_Influence-based multi-agent Exploration.pdf',
        './journal_club_papers/P6_JinyiLiu_20241114/3_Settling Decentralized Multi-Agent Coordinated Exploration by Novelty Sharing.pdf',
        './journal_club_papers/P6_JinyiLiu_20241114/4_Population-Based Diverse Exploration for Sparse-Reward Multi-Agent Tasks.pdf',
        './journal_club_papers/P6_JinyiLiu_20241114/5_Episodic Multi-agent Reinforcement Learning with Curiosity-driven Exploration.pdf'
    ];

    try {
        // 下载每个文件并将其添加到zip文件中
        for (const file of files) {
            const response = await fetch(file);
            if (!response.ok) throw new Error(`Failed to fetch ${file}`);
            const blob = await response.blob();
            const fileName = file.split('/').pop(); // 从路径中提取文件名
            folder.file(fileName, blob); // 将每个文件添加到zip文件夹中
        }

        // 生成ZIP文件并触发下载
        zip.generateAsync({ type: 'blob' }).then(function(content) {
            saveAs(content, "Papers_JinyiLiu_20241114.zip"); // 使用FileSaver.js保存文件
        });
    } catch (error) {
        console.error('Error downloading files:', error);
        alert('Failed to download files. Please check the file paths or try again later.');
    }
}
