

        
# CHANGELOG

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project does adhere to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 2025-02-21
Several updates addressing broadcasting support, profiler naming conventions, and FP8 support were introduced, alongside various fixes and improvements.
### Fixed
- Fixed row/column broadcast with array arguments by moving constexpr checks in Sm90RowBroadcast and Sm90ColBroadcast.
([View Commit](https://github.com/NVIDIA/cutlass/commit/eefa171318b79cbe2e78514d4cce5cd0fe919d0c))
### Changed
- Truncated enum member names in the GemmKind class for Cutlass profiler.
([View Commit](https://github.com/NVIDIA/cutlass/commit/afa1772203677c5118fcd82537a9c8fefbcc7008))
### Added
- Added Hopper Grouped GEMM support for FP8 Accum with profiler extensions.
([View Commit](https://github.com/NVIDIA/cutlass/commit/9b3772dfa64da305612a0e4cafc51bd1bcb3f74d))

## 2025-02-20
The repository saw version updates and documentation improvements.
### Changed
- Updated version to 3.8 v2, including relevant documentation changes.
([View Commit](https://github.com/NVIDIA/cutlass/commit/b84e9802d84b16bcb4e92338fcf0a04785df9236))

## 2025-02-11
Improvements were made for better compatibility with CUDA 12, ensuring smoother integration and functionality.
### Fixed
- Ensured consistent use of `cudaGetDriverEntryPoint` with CUDA 12 to avoid undefined symbol errors.
([View Commit](https://github.com/NVIDIA/cutlass/commit/e9627ce55b42fd2599f58cd4396da9380954def0))

## 2025-02-10
Documentation updates and small content corrections were carried out to enhance clarity and accuracy.
### Added
- Added 'ParetoQ: Scaling Laws in Extremely Low-bit LLM Quantization' to PUBLICATIONS.md.
([View Commit](https://github.com/NVIDIA/cutlass/commit/ad6e1ec19c520a0fa12b3519828ddea29b8040c1))
### Fixed
- Corrected a typo in `0x_gemm_tutorial.md` to improve sentence clarity.
([View Commit](https://github.com/NVIDIA/cutlass/commit/0642d46dd48a5fc644eba29ecc4d10798967a395))
        