

        
# CHANGELOG

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project does adhere to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 2025-02-21
This version includes important fixes and enhancements including optimization of the broadcast functionality and modifications to support FP8 accumulation.
### Fixed
- Fix Row/Col broadcast with array arguments
([View Commit](https://github.com/NVIDIA/cutlass/commit/eefa171318b79cbe2e78514d4cce5cd0fe919d0c))
### Changed
- Name truncation for Cutlass profiler
([View Commit](https://github.com/NVIDIA/cutlass/commit/afa1772203677c5118fcd82537a9c8fefbcc7008))
### Added
- Hopper Grouped GEMM support for FP8 Accum
([View Commit](https://github.com/NVIDIA/cutlass/commit/9b3772dfa64da305612a0e4cafc51bd1bcb3f74d))

## 2025-02-20
Update for version 3.8 with unspecified details has been introduced.
### Changed
- General update to version 3.8
([View Commit](https://github.com/NVIDIA/cutlass/commit/b84e9802d84b16bcb4e92338fcf0a04785df9236))

## 2025-02-11
This release addresses the compatibility issue with CUDA 12 by altering driver entry point usage.
### Fixed
- Always use cudaGetDriverEntryPoint with CUDA 12
([View Commit](https://github.com/NVIDIA/cutlass/commit/e9627ce55b42fd2599f58cd4396da9380954def0))

## 2025-02-10
Significant documentation updates were made along with new publication entries.
### Added
- Add ParetoQ to PUBLICATIONS.md
([View Commit](https://github.com/NVIDIA/cutlass/commit/ad6e1ec19c520a0fa12b3519828ddea29b8040c1))
### Fixed
- Typographical error in 0x_gemm_tutorial.md
([View Commit](https://github.com/NVIDIA/cutlass/commit/0642d46dd48a5fc644eba29ecc4d10798967a395))

## 2025-02-07
An unspecified update to version 3.8.0 was completed in collaboration with a co-author.
### Changed
- Version 3.8.0 update with name correction
([View Commit](https://github.com/NVIDIA/cutlass/commit/833f6990e031b48b4cd2fcf55e0849c51ef6bac2))

## 2025-02-02
New support for row and column broadcasting in Pointer Array has been introduced.
### Added
- Support for Row/Col broadcast PtrArray
([View Commit](https://github.com/NVIDIA/cutlass/commit/affd1b693dfc121c51118cbc8583dfd308227ca6))

## 2025-02-01
A bug fix was implemented for generic-k code in the context of top-k with softmax operations.
### Fixed
- Bugfix for generic-k code in top-k with softmax
([View Commit](https://github.com/NVIDIA/cutlass/commit/6f552781215f542f36dde611b8bf3922c02a214a))
        