

        
# CHANGELOG

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project does adhere to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 2025-02-26
Introduced significant enhancements and new features for GEMM operations on Hopper and Blackwell architectures.
### Added
- Blockwise and Groupwise GEMM improvements for Hopper. ([View Commit](https://github.com/NVIDIA/cutlass/commit/ca4fdbea708ad940c905359788372b8add9f85e0))
- Blockwise Grouped GEMM for Hopper. 
- Static ScalePromotionInterval for Hopper FP8 GEMMs. 
### Fixed
- Adjustments to existing GEMM functionalities for improved performance on Hopper and Blackwell. ([View Commit](https://github.com/NVIDIA/cutlass/commit/ca4fdbea708ad940c905359788372b8add9f85e0))
- Integration of new scaling strategies into the kernel for better efficiency. 
        