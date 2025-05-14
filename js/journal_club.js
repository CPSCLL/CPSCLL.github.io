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

async function downloadAllPapers7() {
    const zip = new JSZip();
    const folder = zip.folder("Papers_RuichongMa_20241128"); // 创建一个文件夹来存储所有论文

    // 定义所有文件的路径
    const files = [
        './journal_club_papers/P7_RuichongMa_20241128/1-Deep reinforcement learning for dynamic flexible job shop scheduling problem considering variable processing times.pdf',
        './journal_club_papers/P7_RuichongMa_20241128/2-Dynamic scheduling for flexible job shop using a deep reinforcement learning approach.pdf',
        './journal_club_papers/P7_RuichongMa_20241128/3-Dynamic multi-objective scheduling for flexible job shop by deep reinforcement learning.pdf',
        './journal_club_papers/P7_RuichongMa_20241128/4-An adaptive multi-objective multi-task scheduling method by hierarchical deep reinforcement learning.pdf',
        './journal_club_papers/P7_RuichongMa_20241128/5-Real-Time Scheduling for Dynamic Partial-No-Wait Multi objective Flexible Job Shop by Deep Reinforcement Learning.pdf'
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
            saveAs(content, "Papers_RuichongMa_20241128.zip"); // 使用FileSaver.js保存文件
        });
    } catch (error) {
        console.error('Error downloading files:', error);
        alert('Failed to download files. Please check the file paths or try again later.');
    }
}

async function downloadAllPapers8() {
    const zip = new JSZip();
    const folder = zip.folder("Papers_JunnanHe_20241213"); // 创建一个文件夹来存储所有论文

    // 定义所有文件的路径
    const files = [
        './journal_club_papers/P8_JunnanHe_20241213/1.Deep Multi-view Information Bottleneck.pdf',
        './journal_club_papers/P8_JunnanHe_20241213/2.Cross-View Representation Learning for Multi-View Logo Classification with Information Bottleneck.pdf',
        './journal_club_papers/P8_JunnanHe_20241213/3.Learning Robust Representations via Multi-View Information Bottleneck.pdf',
        './journal_club_papers/P8_JunnanHe_20241213/4.Multi-View Information-Bottleneck Representation Learning.pdf',
        './journal_club_papers/P8_JunnanHe_20241213/5.Multi-View Information Bottleneck Without Variational Approximation.pdf'
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
            saveAs(content, "Papers_JunnanHe_20241213.zip"); // 使用FileSaver.js保存文件
        });
    } catch (error) {
        console.error('Error downloading files:', error);
        alert('Failed to download files. Please check the file paths or try again later.');
    }
}

async function downloadAllPapers9() {
    const zip = new JSZip();
    const folder = zip.folder("Papers_JinghaoLiu_20241225"); // 创建一个文件夹来存储所有论文

    // 定义所有文件的路径
    const files = [
        './journal_club_papers/P9_JinghaoLiu_20241226/1.Optimal_Kalman_Consensus_Filter_for_Weighted_Directed_Graphs.pdf',
        './journal_club_papers/P9_JinghaoLiu_20241226/2.Optimal_Kalman_Filter_With_Information-Weighted_Consensus.pdf',
        './journal_club_papers/P9_JinghaoLiu_20241226/3.An_LMI-Based_Robust_Nonlinear_Adaptive_Observer_for_Disturbed_Regression_Models.pdf',
        './journal_club_papers/P9_JinghaoLiu_20241226/4.A_New_Approach_to_Linear_Nonlinear_Distributed_Fusion_Estimation_Problem.pdf',
        './journal_club_papers/P9_JinghaoLiu_20241226/5.Dynamical robust filtering for nonlinear.pdf'
        
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
            saveAs(content, "Papers_JinghaoLiu_20241225.zip"); // 使用FileSaver.js保存文件
        });
    } catch (error) {
        console.error('Error downloading files:', error);
        alert('Failed to download files. Please check the file paths or try again later.');
    }
}

async function downloadAllPapers10() {
    const zip = new JSZip();
    const folder = zip.folder("Papers_ZhichengChen_20250109"); // 创建一个文件夹来存储所有论文

    // 定义所有文件的路径
    const files = [
        './journal_club_papers/P10_ZhichengChen_20250109/1-Tailored Federated Learning With Adaptive Central Acceleration on Diversified Global Models.pdf',
        './journal_club_papers/P10_ZhichengChen_20250109/2-FedVeca Federated Vectorized Averaging on Non-IID Data With Adaptive Bi-Directional Global Objectiv.pdf',
        './journal_club_papers/P10_ZhichengChen_20250109/3-Reschedule Gradients Temporal Non-IID Resilient Federated Learning.pdf',
        './journal_club_papers/P10_ZhichengChen_20250109/4-Towards Efficient and Stable K-Asynchronous Federated Learning With Unbounded Stale Gradients on Non.pdf',
        './journal_club_papers/P10_ZhichengChen_20250109/5-Communication-Efficient Federated Learning with Accelerated Client Gradient.pdf'
        
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
            saveAs(content, "Papers_ZhichengChen_20250109.zip"); // 使用FileSaver.js保存文件
        });
    } catch (error) {
        console.error('Error downloading files:', error);
        alert('Failed to download files. Please check the file paths or try again later.');
    }
}

async function downloadAllPapers11() {
    const zip = new JSZip();
    const folder = zip.folder("Papers_QingheDong_20250120"); // 创建一个文件夹来存储所有论文

    // 定义所有文件的路径
    const files = [
        './journal_club_papers/P11_QingheDong_20250120/1_Distributed_and_Collective_Deep_Reinforcement_Learning_for_Computation_Offloading_A_Practical_Perspective.pdf',
        './journal_club_papers/P11_QingheDong_20250120/2_Joint_Computation_Offloading_and_Resource_Allocation_in_Multi-Edge_Smart_Communities_With_Personalized_Federated_Deep_Reinforcement_Learning.pdf',
        './journal_club_papers/P11_QingheDong_20250120/3_Distributed_Resource_Scheduling_for_Large-Scale_MEC_Systems_A_Multiagent_Ensemble_Deep_Reinforcement_Learning_With_Imitation_Acceleration.pdf',
        './journal_club_papers/P11_QingheDong_20250120/4_Dynamic_Scheduling_for_Stochastic_Edge-Cloud_Computing_Environments_Using_A3C_Learning_and_Residual_Recurrent_Neural_Networks.pdf',
        './journal_club_papers/P11_QingheDong_20250120/5_A_Distributed_Deep_Reinforcement_Learning_Technique_for_Application_Placement_in_Edge_and_Fog_Computing_Environments.pdf'
        
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
            saveAs(content, "Papers_QingheDong_20250120"); // 使用FileSaver.js保存文件
        });
    } catch (error) {
        console.error('Error downloading files:', error);
        alert('Failed to download files. Please check the file paths or try again later.');
    }
}

async function downloadAllPapers12() {
    const zip = new JSZip();
    const folder = zip.folder("Papers_ManLi_20250213"); // 创建一个文件夹来存储所有论文

    // 定义所有文件的路径
    const files = [
        './journal_club_papers/P12_ManLi_20250213/1-A_PINN-Based_Friction-Inclusive_Dynamics_Modeling_Method_for_Industrial_Robots.pdf',
        './journal_club_papers/P12_ManLi_20250213/2-Physics-Informed_Neural_Networks_With_Weighted_Losses_by_Uncertainty_Evaluation_for_Accurate_and_Stable_Prediction_of_Manufacturing_Systems.pdf',
        './journal_club_papers/P12_ManLi_20250213/3-Physics-informed_learning_of_governing_equations_from_scarce_data.pdf',
        './journal_club_papers/P12_ManLi_20250213/4-Residual-Connected_Physics-Informed_Neural_Network_For_Anti-Noise_Wind_Field_Reconstruction.pdf',
        './journal_club_papers/P12_ManLi_20250213/5-Transfer_learning_based_physics-informed_neural_networks_for_solving_inverse_problems_in_engineering_structures_under_different_loading_scenarios.pdf'
        
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
            saveAs(content, "Papers_ManLi_20250213"); // 使用FileSaver.js保存文件
        });
    } catch (error) {
        console.error('Error downloading files:', error);
        alert('Failed to download files. Please check the file paths or try again later.');
    }
}

async function downloadAllPapers13() {
    const zip = new JSZip();
    const folder = zip.folder("Papers_JiarongDu_20250228"); // 创建一个文件夹来存储所有论文

    // 定义所有文件的路径
    const files = [
        './journal_club_papers/P13_JiarongDu_20250228/1_A_Co-Evolution_Algorithm_With_Dueling_Reinforcement_Learning_Mechanism_for_the_Energy-Aware_Distributed_Heterogeneous_Flexible_Flow-Shop_Scheduling_Problem.pdf',
        './journal_club_papers/P13_JiarongDu_20250228/2_NeurIPS-2021-a-hierarchical-reinforcement-learning-based-optimization-framework-for-large-scale-dynamic-pickup-and-delivery-problems-Paper.pdf',
        './journal_club_papers/P13_JiarongDu_20250228/3_A novel priority dispatch rule generation method based on graph neuralnetwork and reinforcement learning for distributed job-shop scheduling.pdf',
        './journal_club_papers/P13_JiarongDu_20250228/4_An end-to-end deep reinforcement learning method based on graph neuralnetwork for distributed job-shop scheduling problem.pdf',
        './journal_club_papers/P13_JiarongDu_20250228/5_Distributed_Real-Time_Scheduling_in_Cloud_Manufacturing_by_Deep_Reinforcement_Learning.pdf'
        
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
            saveAs(content, "Papers_JiarongDu_20250228"); // 使用FileSaver.js保存文件
        });
    } catch (error) {
        console.error('Error downloading files:', error);
        alert('Failed to download files. Please check the file paths or try again later.');
    }
}

async function downloadAllPapers14() {
    const zip = new JSZip();
    const folder = zip.folder("Papers_RuichongMa_20250317"); // 创建一个文件夹来存储所有论文

    // 定义所有文件的路径
    const files = [
        './journal_club_papers/P14_RuichongMa_20250317/1_A novel collaborative agent reinforcement learning framework based on an attention mechanism and disjunctive graph embedding for flexible job shop scheduling problem.pdf',
        './journal_club_papers/P14_RuichongMa_20250317/2_Dynamic job shop scheduling based on deep reinforcement learning for multiagent manufacturing systems.pdf',
        './journal_club_papers/P14_RuichongMa_20250317/3_A_Hierarchical_Multi-Action_Deep_Reinforcement_Learning_Method_for_Dynamic_Distributed_Job-Shop_Scheduling_Problem_With_Job_Arrivals.pdf',
        './journal_club_papers/P14_RuichongMa_20250317/4_Real-Time_Scheduling_for_Flexible_Job_Shop_With_AGVs_Using_Multiagent_Reinforcement_Learning_and_Efficient_Action_Decoding.pdf',
        './journal_club_papers/P14_RuichongMa_20250317/5_A deep multi-agent reinforcement learning approach to solve dynamic job shop scheduling problem.pdf'
        
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
            saveAs(content, "Papers_RuichongMa_20250317"); // 使用FileSaver.js保存文件
        });
    } catch (error) {
        console.error('Error downloading files:', error);
        alert('Failed to download files. Please check the file paths or try again later.');
    }
}

async function downloadAllPapers15() {
    const zip = new JSZip();
    const folder = zip.folder("Papers_JinyiLiu_20250331"); // 创建一个文件夹来存储所有论文

    // 定义所有文件的路径
    const files = [
        './journal_club_papers/P15_JinyiLiu_20250331/1-Neighborhood_curiosity-based_exploration_in_multi-agent_reinforcement_learning.pdf',
        './journal_club_papers/P15_JinyiLiu_20250331/2-WToE_Learning_When_to_Explore_in_Multiagent_Reinforcement_Learning.pdf',
        './journal_club_papers/P15_JinyiLiu_20250331/3-QFuture_Learning_Future_Expectation_Cognition_in_Multiagent_Reinforcement_Learning.pdf',
        './journal_club_papers/P15_JinyiLiu_20250331/4-Attentive_Relational_State_Representation_in_Decentralized_Multiagent_Reinforcement_Learning.pdf',
        './journal_club_papers/P15_JinyiLiu_20250331/5-Extrinsic-and-Intrinsic_Reward-Based_Multi-Agent_Reinforcement_Learning_for_Multi-UAV_Cooperative_Target_Encirclement.pdf'
        
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
            saveAs(content, "Papers_JinyiLiu_20250331"); // 使用FileSaver.js保存文件
        });
    } catch (error) {
        console.error('Error downloading files:', error);
        alert('Failed to download files. Please check the file paths or try again later.');
    }
}

async function downloadAllPapers16() {
    const zip = new JSZip();
    const folder = zip.folder("Papers_JunnanHe_20250414"); // 创建一个文件夹来存储所有论文

    // 定义所有文件的路径
    const files = [
        './journal_club_papers/P16_JunnanHe_20250414/1_Autoformer.pdf',
        './journal_club_papers/P16_JunnanHe_20250414/2_Dlinear.pdf',
        './journal_club_papers/P16_JunnanHe_20250414/3_Informer.pdf',
        './journal_club_papers/P16_JunnanHe_20250414/4_PatchTST.pdf',
        './journal_club_papers/P16_JunnanHe_20250414/5_PETformer.pdf'
        
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
            saveAs(content, "Papers_JunnanHe_20250414"); // 使用FileSaver.js保存文件
        });
    } catch (error) {
        console.error('Error downloading files:', error);
        alert('Failed to download files. Please check the file paths or try again later.');
    }
}

async function downloadAllPapers17() {
    const zip = new JSZip();
    const folder = zip.folder("Papers_MohanNiu_20250421"); // 创建一个文件夹来存储所有论文

    // 定义所有文件的路径
    const files = [
        './journal_club_papers/P17_MohanNiu_20250421/1-Meta_Learning_Task_Representation_in_Multiagent_Reinforcement_Learning_From_Global_Inference_to_Local_Inference.pdf',
        './journal_club_papers/P17_MohanNiu_20250421/2-Multi-Task_Multi-Agent_Reinforcement_Learning_With_Interaction_and_Task_Representations.pdf',
        './journal_club_papers/P17_MohanNiu_20250421/3-NVIF_Neighboring_Variational_Information_Flow_for_Cooperative_Large-Scale_Multiagent_Reinforcement_Learning.pdf',
        './journal_club_papers/P17_MohanNiu_20250421/4-State-Temporal_Compression_in_Reinforcement_Learning_With_the_Reward-Restricted_Geodesic_Metric.pdf',
        './journal_club_papers/P17_MohanNiu_20250421/5-A_Robust_Mean-Field_Actor-Critic_Reinforcement_Learning_Against_Adversarial_Perturbations_on_Agent_States.pdf'
        
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
            saveAs(content, "Papers_MohanNiu_20250421"); // 使用FileSaver.js保存文件
        });
    } catch (error) {
        console.error('Error downloading files:', error);
        alert('Failed to download files. Please check the file paths or try again later.');
    }
}

async function downloadAllPapers18() {
    const zip = new JSZip();
    const folder = zip.folder("Papers_JinghaoLiu_20250505"); // 创建一个文件夹来存储所有论文

    // 定义所有文件的路径
    const files = [
        './journal_club_papers/P18_JinghaoLiu_20250505/1.Distributed_Partial_Quantum_Consensus_of_Qubit_Networks_With_Connected_Topologies.pdf',
        './journal_club_papers/P18_JinghaoLiu_20250505/2.Entanglement-Controlled_Quantum_Federated_Learning.pdf',
        './journal_club_papers/P18_JinghaoLiu_20250505/3.Stability_analysis_of_quantum_systems_A_Lyapunov_criterion_and_an_invariance_principle.pdf',
        './journal_club_papers/P18_JinghaoLiu_20250505/4.Towards provably efficient quantum algorithms for large-scale machine-learning models.pdf',
        './journal_club_papers/P18_JinghaoLiu_20250505/5.Learning_to_Learn_Variational_Quantum_Algorithm.pdf'
        
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
            saveAs(content, "Papers_JinghaoLiu_20250505"); // 使用FileSaver.js保存文件
        });
    } catch (error) {
        console.error('Error downloading files:', error);
        alert('Failed to download files. Please check the file paths or try again later.');
    }
}

async function downloadAllPapers19() {
    const zip = new JSZip();
    const folder = zip.folder("Papers_ZhichengChen_20250519"); // 创建一个文件夹来存储所有论文

    // 定义所有文件的路径
    const files = [
        './journal_club_papers/P19_ZhichengChen_20250519/1-Balancing_Privacy_and_Accuracy_Using_Significant_Gradient_Protection_in_Federated_Learning.pdf',
        './journal_club_papers/P19_ZhichengChen_20250519/2-CGoFed_Constrained_Gradient_Optimization_Strategy_for_Federated_Class_Incremental_Learning.pdf',
        './journal_club_papers/P19_ZhichengChen_20250519/3-Federated_Gradient_Matching_Pursuit.pdf',
        './journal_club_papers/P19_ZhichengChen_20250519/4-Ma_Layer-Wised_Model_Aggregation_for_Personalized_Federated_Learning_CVPR_2022_paper.pdf',
        './journal_club_papers/P19_ZhichengChen_20250519/5-Towards Layer-Wise Personalized Federated Learning Adaptive Layer Disentanglement via Conflicting G.pdf'
        
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
            saveAs(content, "Papers_ZhichengChen_20250519"); // 使用FileSaver.js保存文件
        });
    } catch (error) {
        console.error('Error downloading files:', error);
        alert('Failed to download files. Please check the file paths or try again later.');
    }
}
